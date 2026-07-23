import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createConversation,getConversations,deleteConversation } from "../services/chatService";
import { supabase } from "../services/supabase";

import Sidebar from "../components/Sidebar";
import ChatArea from "../components/ChatArea";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      // Current User
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/");
        return;
      }

      setUser(user);

      // Load Chats
      let chats = await getConversations(user.id);

      // First Chat
      if (!chats || chats.length === 0) {
        const chat = await createConversation(user.id);

        if (chat) {
          chats = [chat];
        } else {
          chats = [];
        }
      }
      setConversations(chats);

      if (chats.length > 0) {
        setCurrentConversation(chats[0]);
      }
    } 
    catch (error) {
      console.log(error);
      console.log(error.message);
      console.log(error.details);
      console.log(error.code);
}
    finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  async function handleNewChat() {
  const newChat = await createConversation(user.id);

  const chats = await getConversations(user.id);

  setConversations(chats);

  setCurrentConversation(newChat);
}

  if (loading) {
    return (
      <div className="h-screen bg-slate-900 text-white flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar
        user={user}
        conversations={conversations}
        currentConversation={currentConversation}
        setCurrentConversation={setCurrentConversation}
        handleLogout={handleLogout}
        handleNewChat={handleNewChat}
      />
      <ChatArea
        currentConversation={currentConversation}
        user = {user}
      />
    </div>
  );
}

export default Dashboard;