import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Add or Update Todo
  function addTodo() {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updatedTodos = [...todos];

      updatedTodos[editIndex].text = task;

      setTodos(updatedTodos);

      setEditIndex(null);
    } else {
      setTodos([
        ...todos,
        {
          text: task,
          completed: false,
        },
      ]);
    }

    setTask("");
  }

  // Delete Todo
  function deleteTodo(indexToDelete) {
    const updatedTodos = todos.filter((todo, index) => {
      return index !== indexToDelete;
    });

    setTodos(updatedTodos);
  }

  // Complete / Incomplete
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

  // Edit Todo
  function editTodo(index) {
    setTask(todos[index].text);
    setEditIndex(index);
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

      <button onClick={addTodo}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

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
              {todo.completed ? "✅ " : "❌ "}
              {todo.text}
            </span>

            <div className="btn-group">
              <button
                className="edit-btn"
                onClick={() => editTodo(index)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;