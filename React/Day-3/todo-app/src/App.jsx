
import './App.css'

function App() {
  const[task,setTask] = useState("")

  return (
    <div className = "container">
      <h1>Todo App</h1>

      <input type= "text"
      placeholder = "Enter a task"
      value = {task}
      onChange={(e) => setTask(e.target.value)}
      />

      <button>Add</button>
      <h3>Current Task</h3>
      <p>{task}</p>

      <ul>
        <li>Learn React</li>
        <li>Build Todo App</li>
        <li>Practice useState</li>
      </ul>
    </div>
  )
}

export default App
