import useUsers from "./useUsers"


function App() {
  const users = useUsers()

  return (
   <>
    {users.map(user =>(
      <h2 key={user.id}>
        {user.name}
      </h2>
    ))}
   </>
  )
}

export default App
