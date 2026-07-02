import Basic from "./basic_01"

const firstname = "Umer";
const lastname = "Yaseen";
const city = "sadiqabad";
const age = "20";
const university = "U.E.T, Lahore";
const field = "AI";
function App() {
  return (
    <>
    <Basic/>
    {/* this is heading */}
    <h1>My name is {firstname} {lastname}</h1>
    <h2>I am from {city.toUpperCase()}</h2>
    <h2>My age is {age}</h2>
    <h2>I'm studying an {field} from {university}</h2>
    <h2>Current year: {new Date().getFullYear()}</h2>
    <h3 style={{color: "blue"}}>I am an AI student.</h3>
    <p style = {{color:"green"}}>My core is AI and backend.I am doing frontend development jsut for learning purpose.Because Knowledge is the key of success.</p>
    </>
  )
}

export default App
