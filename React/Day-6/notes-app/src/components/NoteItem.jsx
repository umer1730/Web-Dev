import useNotes from "../hooks/useNotes";

function NoteItem({ note }) {
  const { deleteNote } = useNotes();

  return (
    <div className="note">
      <p>{note.text}</p>

      <button onClick={() => deleteNote(note.id)}>
        Delete
      </button>
    </div>
  );
}

export default NoteItem;