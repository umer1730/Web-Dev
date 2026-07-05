import { useState } from "react";

function Multiple() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    console.log(name);
    console.log(email);

  }

  return (

    <form onSubmit={handleSubmit}>

      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>
          setName(e.target.value)
        }
      />

      <br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>
          setEmail(e.target.value)
        }
      />

      <br />

      <button>
        Submit
      </button>

    </form>

  );

}

export default Multiple;