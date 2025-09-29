import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api", // backend Spring Boot URL
});

// ✅ Get all questions
export const getQuestions = () => API.get("/questions");

// ✅ Submit answers
export const submitAnswers = (answers) => API.post("/questions/submit", answers);
