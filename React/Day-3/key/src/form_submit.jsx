import { useState } from "react";

function Submission() {

  const [name, setName] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    alert(`Hello ${name}`);

  }

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <button>
        Submit
      </button>

    </form>

  );

}

export default Submission;