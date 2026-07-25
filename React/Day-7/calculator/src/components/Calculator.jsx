import { useState, useEffect } from "react";
import Button from "./Button";

function Calculator() {
  const [input, setInput] = useState("");

  function handleClick(value) {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput((prev) => prev + value);
    }
  }

  function handleKeyDown(e) {
    const key = e.key;

    if ("0123456789+-*/.".includes(key)) {
      handleClick(key);
    } else if (key === "Enter") {
      handleClick("=");
    } else if (key === "Escape") {
      handleClick("C");
    } else if (key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C",
  ];

  return (
    <div className="calculator">
      <input
        type="text"
        value={input}
        readOnly
      />

      <div className="buttons">
        {buttons.map((btn, index) => (
          <Button
            key={index}
            value={btn}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;