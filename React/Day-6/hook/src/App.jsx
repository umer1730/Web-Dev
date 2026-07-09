import useCounter from "./useCounter"
import About from "./about"


function App() {
  const {count, increment,decrement} = useCounter(0)

  return (
          <>
            <h1>App Component</h1>
            <h1>{count}</h1>
            <button onClick={increment}>
              Increment
            </button>
            <button onClick={decrement}>
              Decrement
            </button>

            <hr />
            <About />
          </>
  )
}

export default App
