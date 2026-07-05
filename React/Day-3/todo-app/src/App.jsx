
import './App.css'

function App() {

  return (
    <div className = "container">
      <h1>Todo App</h1>

      <input type= "text"
      placeholder = "Enter a task"
      />

      <button>Add</button>
      <ul>
        <li>Learn React</li>
        <li>Build Todo App</li>
        <li>Practice useState</li>
      </ul>
    </div>
  )
}

export default App
