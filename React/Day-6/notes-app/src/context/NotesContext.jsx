import { createContext, useState } from "react";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);

  function addNote(text) {
    if (text.trim() === "") return;

    const newNote = {
      id: Date.now(),
      text,
    };

    setNotes([...notes, newNote]);
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
}