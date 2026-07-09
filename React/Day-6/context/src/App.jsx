import UserContext from "./UserContext"
import Home from "./home"


function App() {
  const user = {
  name: "Ali",
  age: 22,
  city: "Lahore",
  language: "English"
};
  return (
    <UserContext.Provider value = {user}>
      <Home />
    </UserContext.Provider>    
  )
}

export default App
