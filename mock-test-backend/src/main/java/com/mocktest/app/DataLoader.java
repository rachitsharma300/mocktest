package com.mocktest.app;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mocktest.app.model.Question;
import com.mocktest.app.repository.QuestionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    private final QuestionRepository questionRepository;

    public DataLoader(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (questionRepository.count() == 0) {
            ObjectMapper mapper = new ObjectMapper();
            List<Question> questions = mapper.readValue(
                    new ClassPathResource("questions.json").getFile(),
                    new TypeReference<List<Question>>() {}
            );

            questionRepository.saveAll(questions);
            System.out.println("✅ Questions inserted into MongoDB!");
        } else {
            System.out.println("ℹ️ Questions already exist in DB.");
        }
    }
}
