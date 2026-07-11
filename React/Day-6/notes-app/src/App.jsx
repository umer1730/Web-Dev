import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  return (
    <div className="container">
      <h1>Notes App</h1>

      <NoteForm />

      <NoteList />
    </div>
  );
}

export default App;