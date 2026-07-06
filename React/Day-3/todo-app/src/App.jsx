import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load Todos from Local Storage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));

    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Save Todos
  useEffect(() => {localStorage.setItem("todos", JSON.stringify(todos));    
  }, [todos]);

  // Add or Update Todo
  function addTodo() {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex].text = task;

      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      const newTodo = {
        text: task,
        completed: false,
        date: new Date().toLocaleString(),
      };

      setTodos([...todos, newTodo]);
    }

    setTask("");
  }

  // Delete
  function deleteTodo(indexToDelete) {
    setTodos(
      todos.filter((todo, index) => index !== indexToDelete)
    );
  }

  // Toggle Complete
  function toggleComplete(indexToToggle) {
    const updatedTodos = todos.map((todo, index) =>
      index === indexToToggle
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    );

    setTodos(updatedTodos);
  }

  // Edit
  function editTodo(index) {
    setTask(todos[index].text);
    setEditIndex(index);
  }

  // Clear All
  function clearAll() {
    setTodos([]);
  }

  // Search
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

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

      <br />
      <br />

      <input
        type="text"
        placeholder="Search Todo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Total Tasks : {todos.length}</h3>

      <h3>
        Completed :
        {todos.filter((todo) => todo.completed).length}
      </h3>

      <button className="clear-btn" onClick={clearAll}>
        Clear All
      </button>

      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            <div>
              <span
                onClick={() => toggleComplete(index)}
                style={{
                  textDecoration: todo.completed
                    ? "line-through"
                    : "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                {todo.completed ? "Yes " : "No "}
                {todo.text}
              </span>

              <br />

              <small>{todo.date}</small>
            </div>

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