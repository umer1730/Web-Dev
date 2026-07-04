import Arguments from "./passing_argu"

function App() {
 /* 
  function greet(){
    alert("Hello! How can I help you?");
  }
  return (
    <button onClick={greet}>
      Click Me
    </button>
  )
  */
  return (
    <>
      <button onClick={() => alert("Hello! How can I help you?")}>
        Click Me
      </button>
      <hr />
      <Arguments />
    </>
  );
}

export default App