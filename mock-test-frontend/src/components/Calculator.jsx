import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString()); // ⚠ eval is fine for simple app, but don’t use in production
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = ["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+","=","C"];

  return (
    <div className="bg-gray-900 text-white p-4 rounded-2xl shadow-lg w-64">
      <div className="bg-gray-700 p-2 mb-3 rounded text-right text-xl font-mono">
        {input || "0"}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="bg-gray-600 hover:bg-gray-500 text-white p-3 rounded-lg text-lg font-bold"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
