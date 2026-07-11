import { useState } from 'react'
import "./App.css"

function App() {
  const [showpassword, setShowPassword] = useState(false)

  return (
   <div className='container'>
      <h1>Show / Hide Password</h1>

      <input type = {showpassword ? "text" : "password"}
      placeholder='Enter Password'
      />

      <br />
      <br />

      <button onClick={() =>setShowPassword(!showpassword)}>
        {showpassword ? "Hide Password" : "Show Password"}
      </button>
   </div>
  )
}

export default App
