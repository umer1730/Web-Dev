import { useState } from 'react'
import Update from "./update_strings"
import Updating from "./update_boolean"
import Arrays from './update_arrays'
import Objects from './update_objects'
import Mode from './update_lightmode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setCount(count-1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    <hr />
    {/*this is import files*/}
    <Update />
    <Updating />
    <Arrays />
    <Objects />
    <Mode />
    </>
  )
}

export default App
