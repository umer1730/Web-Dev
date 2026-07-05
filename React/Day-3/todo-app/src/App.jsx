import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  }

  function deleteTodo(indexToDelete) {
    const updatedTodos = todos.filter((todo, index) => {
      return index !== indexToDelete;
    });

    setTodos(updatedTodos);
  }

  return (
    <div className="container">
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}

            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;