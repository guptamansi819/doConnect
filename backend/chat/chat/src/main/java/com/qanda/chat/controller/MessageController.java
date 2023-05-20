package com.qanda.chat.controller;

import ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy;
import com.qanda.chat.model.Message;
import com.qanda.chat.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MessageController {

    @Autowired
    private MessageService service;

    @GetMapping("/messages")
    private List<Message> messageList() {
        return service.getAllMessages();
    }


    @GetMapping("/messageTest")
    private String test() {
        try {
            List<Message> messages = new ArrayList<>();
            for (int i = 0; i < 10; i++) {
                Message m = new Message("Hi " + i, "Vamsi", "John");
                messages.add(m);
            }
            service.saveAll(messages);
            return "ok";
        } catch (Exception e) {
            return e.getLocalizedMessage();
        }
    }

    @GetMapping("/messages/{from}/{to}")
    private List<Message> userMessageList(@PathVariable String from, @PathVariable String to) {
        return service.getByFromAndTo(from, to);
    }

    @PostMapping("/message")
    private String sendMessage(@RequestBody Message m) {
        try {
            service.saveMessage(m);
            return "ok";
        } catch (Exception e) {
            return e.getLocalizedMessage();
        }
    }
}
