import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

function useNotes() {
  return useContext(NotesContext);
}

export default useNotes;