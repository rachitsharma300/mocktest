import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz"); // navigate to Quiz page
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Welcome to Mock Test App 🚀
      </h1>
      <p className="text-center mb-8">
        Test your knowledge and improve your skills with our mock questions!
      </p>
      <button
        onClick={startQuiz}
        className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl text-lg font-semibold transition"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Home;
