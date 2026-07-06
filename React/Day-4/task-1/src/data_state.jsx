import { useEffect, useState } from "react";

function Data() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });

  }, []);

  return (
    <>
      <h1>Users</h1>
      {
        users.map((user) =>(
            <div key= {user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        ))
      }
    </>
  );
}

export default Data;