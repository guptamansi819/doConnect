package com.qanda.chat.service;

import com.qanda.chat.model.Message;
import com.qanda.chat.repo.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.*;
import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepo repo;

    public void saveMessage(Message m) {
        repo.save(m);
    }

    public void updateMessage(Message m) {
        repo.save(m);
    }

    public void saveAll(List<Message> messages) {
        repo.saveAll(messages);
    }

    public List<Message> getAllMessages() {
        return repo.findAll();
    }

    public List<Message> getByFromAndTo(String from, String to) {
        return repo.findByFromUserAndToUser(from, to);
    }
}
