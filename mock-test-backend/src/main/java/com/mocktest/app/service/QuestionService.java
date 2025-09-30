package com.mocktest.app.service;

import com.mocktest.app.model.Question;
import com.mocktest.app.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    // Fetch all questions
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    // Save a question (useful if you want an Admin panel later)
    public Question addQuestion(Question question) {
        return questionRepository.save(question);
    }

    // Calculate score based on user answers
    public int calculateScore(Map<String, String> userAnswers) {
        int score = 0;
        for (Map.Entry<String, String> entry : userAnswers.entrySet()) {
            String questionId = entry.getKey();
            String givenAnswer = entry.getValue();

            Question question = questionRepository.findById(questionId).orElse(null);
            if (question != null && question.getCorrectAnswer().equalsIgnoreCase(givenAnswer)) {
                score++;
            }
        }
        return score;
    }
}
