package com.mocktest.app.controller;

import com.mocktest.app.model.Question;
import com.mocktest.app.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/questions")
@CrossOrigin(origins = "*") // allow frontend (React/Tailwind) to call APIs
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    // ✅ Get all questions
    @GetMapping
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    // ✅ Submit answers and calculate score
    @PostMapping("/submit")
    public int submitAnswers(@RequestBody Map<String, String> userAnswers) {
        return questionService.calculateScore(userAnswers);
    }
}
