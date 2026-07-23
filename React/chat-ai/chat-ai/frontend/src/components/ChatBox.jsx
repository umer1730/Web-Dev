import { useState, useEffect } from "react";
import { saveMessage, getMessages } from "../services/chatService";
import API from "../services/api";

function ChatBox({ currentConversation, user }) {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading,setLoading] = useState(false);

  const userName =
    user?.email?.split("@")[0] || "User";

  useEffect(() => {
    loadMessages();
  }, [currentConversation]);

  async function loadMessages() {
    if (!currentConversation) return;

    const data = await getMessages(currentConversation.id);
    setMessages(data);
  }

  const sendMessage = async () => {
    console.log("Current Conversation:", currentConversation);
    if (!currentConversation) {
    console.log("No Conversation Selected");
    return;
  }

    if (!prompt.trim()) return;

    try {
      /* Save user message */
      await saveMessage(
        currentConversation.id,
        "user",
        prompt
      );

      setLoading(true)
      /* Get AI response */
      const res = await API.post("/chat", {
        prompt,
      });

      /* Save AI response */
      await saveMessage(
        currentConversation.id,
        "assistant",
        res.data.response
      );

      /* Reload all messages */
      const updated = await getMessages(currentConversation.id);
      setMessages(updated);


      /* Clear textarea */
      setPrompt("");

      setLoading(false)
    } 
    catch(error){
        console.log(error);
        setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 h-full flex flex-col">

      {/* Welcome Screen */}
      {messages.length === 0 && (
        <div className="flex flex-col items-center justify-center flex-1 text-center">

          <h1 className="text-5xl font-bold text-white mb-4">
            Hi {userName} Chat me
          </h1>

          <p className="text-slate-400 text-xl">
            How can I help you?
          </p>

        </div>
      )}

      {/* Messages */}
      {messages.length > 0 && (
        <div className="space-y-4 flex-1 overflow-y-auto mb-6">

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-2xl p-4 rounded-xl ${
                msg.role === "user"
                  ? "ml-auto bg-blue-600 text-white"
                  : "mr-auto bg-slate-800 text-white"
              }`}>
              {msg.content}
            </div>
          ))}
          {loading && (
            <div className="mr-auto bg-slate-800 text-white p-4 rounded-xl max-w-xs animate-pulse">
                AI is typing...
            </div>
        )}

        </div>
      )}

      {/* Input Area */}
      <div className="mt-auto">
        <textarea
          className="w-full rounded-xl p-4 bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Ask anything..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) =>{
            if(e.key === "Enter" && !e.shiftKey){
                e.preventDefault();
                sendMessage();
            }
          }}
        />

        <button
          onClick={sendMessage}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Ask AI
        </button>
      </div>

    </div>
  );
}

export default ChatBox;