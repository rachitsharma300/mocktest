import { useEffect, useState } from "react";

function Timer({ initialMinutes = 30, onTimeUp }) {
  const [time, setTime] = useState(initialMinutes * 60); // seconds

  useEffect(() => {
    if (time <= 0) {
      if (onTimeUp) onTimeUp();
      return;
    }
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, onTimeUp]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md text-lg font-mono">
      ⏱ {minutes}:{seconds.toString().padStart(2, "0")}
    </div>
  );
}

export default Timer;
