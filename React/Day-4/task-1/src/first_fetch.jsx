import { useEffect } from "react";

function First() {

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
      });

  }, []);

  return <h1>Fetch API</h1>;

}

export default First;