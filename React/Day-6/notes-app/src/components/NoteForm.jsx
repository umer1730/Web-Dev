import { useState } from "react";
import useNotes from "../hooks/useNotes";

function NoteForm() {
  const [text, setText] = useState("");
  const { addNote } = useNotes();

  function handleSubmit(e) {
    e.preventDefault();

    addNote(text);

    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a note"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

export default NoteForm;