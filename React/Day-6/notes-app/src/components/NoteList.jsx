import useNotes from "../hooks/useNotes";
import NoteItem from "./NoteItem";

function NoteList() {
  const { notes } = useNotes();

  if (notes.length === 0) {
    return <p>No notes available.</p>;
  }

  return (
    <>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </>
  );
}

export default NoteList;