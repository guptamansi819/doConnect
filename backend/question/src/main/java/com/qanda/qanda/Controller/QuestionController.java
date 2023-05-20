package com.qanda.qanda.Controller;

import com.qanda.qanda.Service.QuestionService;
import com.qanda.qanda.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Id;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class QuestionController {
    @Autowired

    private QuestionService questionService;

    @GetMapping("/questions")
    private List<Question> getQuestions() {
        return questionService.getAll();
    }

    @GetMapping("/questions/{email}")
    private List<Question> getQuestionsByEmail(@PathVariable String email) {
        return questionService.getByUserEmail(email);
    }

    @GetMapping("/questions/answered")
    private List<Question> getByAnswered() {
        return questionService.getQuestionsByAnswered(true);
    }

    @GetMapping("/questions/pending")
    private List<Question> getByPending() {
        return questionService.getQuestionsByAnswered(false);
    }

    @GetMapping("/question/{id}")
    private Question question(@PathVariable int id) {
        try {
            return questionService.getById(id);
        } catch (Exception e) {
            return new Question();
        }
    }

    @GetMapping("/questionCount")
    private Integer questionCount() {
        return questionService.getQuestionCount();
    }

    @GetMapping("/questions/notapproved")
    private List<Question> getByNotApproved() {
        return questionService.getQuestionByApproved(false);
    }

    @GetMapping("/questions/approved")
    private List<Question> getByApproved() {
        return questionService.getQuestionByApproved(true);
    }

    @PatchMapping("/question/update")
    private String updateQuestion(@RequestBody Question q) {
        try {
            q.setAnswered(true);
            questionService.update(q);
            return "ok";
        } catch (Exception e) {
            return "no";
        }
    }


    @PatchMapping("/setApproved/{id}")
    private String update(@PathVariable int id) {
        try {
            Question q = questionService.getById(id);
            q.setApproved(true);
            questionService.update(q);
            return "ok";
        } catch (Exception e) {
            return "no";
        }
    }

    @DeleteMapping("/delete/{id}")
    private String deleteQuestion(@PathVariable int id) {
        try {
            questionService.delete(id);
            return "ok";
        } catch (Exception e) {
            return "no";
        }
    }

    @PostMapping("/postquestion")
    private String postQuestion(@RequestBody HashMap<String, String> body) {
        try {
            String question = body.get("question");
            String email = body.get("email");
            String topic = body.get("topic");
            String name = body.get("name");
            Question q = new Question(question, email, name, topic);
            questionService.postQuestion(q);
            return "ok";
        } catch (Exception e) {
            return "no";
        }
    }

    @GetMapping("/questionsbytopic/{topic}")
    private List<Question> getQuestionsByTopic(@PathVariable String topic) {
        return questionService.getByTopic(topic);
    }

    @GetMapping("/questions/distinct")
    private List<String> getDistinctTopics() {
        return questionService.getDistinctByTopic();
    }
}


