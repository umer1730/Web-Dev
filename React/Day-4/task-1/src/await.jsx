import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    async function fetchUsers() {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
    }

    fetchUsers();

  }, []);

  return (
    <>
      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </>
  );
}

export default App;