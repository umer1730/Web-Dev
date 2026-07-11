import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="container"
      style={{ backgroundColor: color }}
    >
      <h1>Color Changer</h1>

      <button onClick={() => setColor("red")}>
        Red
      </button>

      <button onClick={() => setColor("green")}>
        Green
      </button>

      <button onClick={() => setColor("blue")}>
        Blue
      </button>

      <button onClick={() => setColor("yellow")}>
        Yellow
      </button>

      <button onClick={() => setColor("white")}>
        Reset
      </button>
    </div>
  );
}

export default App;