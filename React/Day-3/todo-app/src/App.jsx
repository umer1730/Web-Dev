import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Todo
  function addTodo() {
    if (task.trim() === "") return;

    setTodos([
      ...todos,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  }

  // Delete Todo
  function deleteTodo(indexToDelete) {
    const updatedTodos = todos.filter((todo, index) => {
      return index !== indexToDelete;
    });

    setTodos(updatedTodos);
  }

  // Toggle Complete
  function toggleComplete(indexToToggle) {
    const updatedTodos = todos.map((todo, index) => {
      if (index === indexToToggle) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
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
            <span
              onClick={() => toggleComplete(index)}
              style={{
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
                cursor: "pointer",
                flex: 1,
              }}
            >
              {todo.completed ? "Yes " : "No "}
              {todo.text}
            </span>

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