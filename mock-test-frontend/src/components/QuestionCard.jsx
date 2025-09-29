import React from "react";

function QuestionCard({ question, selectedAnswer, setSelectedAnswer }) {
  if (!question) return null; // safety check

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">{question.questionText}</h2>
      
      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`border-2 rounded-lg p-3 text-left hover:bg-gray-700 transition ${
              selectedAnswer === option ? "bg-blue-600 border-blue-400" : "border-gray-500"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
