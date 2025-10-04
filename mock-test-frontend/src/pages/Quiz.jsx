import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import Calculator from "../components/Calculator";
import { getQuestions, submitAnswers } from "../services/api";

function Quiz() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // ✅ Fetch questions from backend
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getQuestions();
        setQuestions(response.data);
        if (response.data.length > 0) {
          setSelectedAnswer(answers[response.data[0].id] || "");
        }
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };
    fetchQuestions();
  }, [answers]);

  // ✅ Handle Next Question
  const handleNext = () => {
    const qId = questions[currentIndex].id;
    setAnswers({ ...answers, [qId]: selectedAnswer });
    if (currentIndex < questions.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSelectedAnswer(answers[questions[nextIndex].id] || "");
    }
  };

  // ✅ Handle Previous Question
  const handlePrev = () => {
    const qId = questions[currentIndex].id;
    setAnswers({ ...answers, [qId]: selectedAnswer });
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setSelectedAnswer(answers[questions[prevIndex].id] || "");
    }
  };

  // ✅ Handle Submit Quiz
  const handleSubmit = async () => {
    const qId = questions[currentIndex].id;
    const finalAnswers = { ...answers, [qId]: selectedAnswer };

    try {
      const response = await submitAnswers(finalAnswers);
      const score = response.data;
      navigate("/result", { state: { score, total: questions.length } });
    } catch (err) {
      console.error("Error submitting answers:", err);
    }
  };

  // ✅ Timer callback
  const handleTimeUp = () => {
    alert("Time is up! Submitting your quiz.");
    handleSubmit();
  };

  if (questions.length === 0)
    return <p className="text-center mt-10">Loading questions...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
      <Timer initialMinutes={30} onTimeUp={handleTimeUp} />

      <div className="mt-6 w-full max-w-xl">
        <QuestionCard
          question={questions[currentIndex]}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
        />

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          {currentIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg"
            >
              Next
            </button>
          )}
        </div>
      </div>

      {/* Optional Calculator */}
      <div className="mt-6">
        <Calculator />
      </div>
    </div>
  );
}

export default Quiz;
