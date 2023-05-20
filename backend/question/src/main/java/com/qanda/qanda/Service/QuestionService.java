package com.qanda.qanda.Service;

import com.qanda.qanda.Repository.QuestionRepository;
import com.qanda.qanda.model.Question;
import net.bytebuddy.implementation.bytecode.ShiftRight;
import org.hibernate.type.StringNVarcharType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    public Question getById(int Id) {
        return questionRepository.findById(Id).isPresent() ? questionRepository.findById(Id).get() : new Question();
    }

    public List<Question> getAll() {
        return questionRepository.findAll();
    }

    public List<Question> getByUserEmail(String email) {
        return questionRepository.getByuserEmail(email);
    }

    public void update(Question q) {
        questionRepository.save(q);
    }

    public void delete(int id) {
        Question q = questionRepository.getById(id);
        questionRepository.delete(q);
    }

    public void postQuestion(Question q) {
        questionRepository.save(q);
    }

    public List<Question> getQuestionsByAnswered(boolean isAnswered) {
        return questionRepository.getByIsAnswered(isAnswered);
    }

    public List<Question> getQuestionByApproved(boolean isApproved) {
        return questionRepository.getByIsApproved(isApproved);
    }

    public Integer getQuestionCount() {
        return questionRepository.getCountByIsApproved(false);
    }

    public List<Question> getByTopic(String topic) {
        return questionRepository.getQuestionsByTopic(topic);
    }

    public List<String> getDistinctByTopic() {
        return questionRepository.getDistinctTopic();
    }

}
