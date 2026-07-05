import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    setTodos([...todos, task]);
    setTask("");
  }

  function deleteTodo(indexTodelete){
    const updatedTodos = todos.filter((todo,index) =>{
      return index !== indexTodelete;
    })
  }

  return (
    <div className="container">
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;