import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-bold mb-6">Quiz Completed! ✅</h1>
      <p className="text-xl mb-4">
        You scored <span className="text-green-400 font-semibold">{score}</span> out of{" "}
        <span className="text-blue-400 font-semibold">{total}</span>
      </p>
      <p className="mb-6">
        {score === total
          ? "Perfect! 🎉"
          : score > total / 2
          ? "Good job! 👍"
          : "Keep practicing! 💪"}
      </p>
      <button
        onClick={goHome}
        className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl text-lg font-semibold transition"
      >
        Go to Home
      </button>
    </div>
  );
}

export default Result;
