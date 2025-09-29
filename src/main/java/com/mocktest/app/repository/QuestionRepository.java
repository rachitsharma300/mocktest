package com.mocktest.app.repository;

import com.mocktest.app.model.Question;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends MongoRepository<Question, String> {
    // You can add custom queries later if needed
}
