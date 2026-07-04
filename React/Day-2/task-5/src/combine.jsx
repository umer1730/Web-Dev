import { useState } from "react";

function Combine() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
      >
        Toggle
      </button>

      {show && <h2>Hello Ali</h2>}
    </>
  );
}

export default Combine