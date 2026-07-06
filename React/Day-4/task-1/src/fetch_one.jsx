import { useEffect, useState } from "react";

function One() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <>
      <h1>User Details</h1>

      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </>
  );
}

export default One;