package com.qanda.chat.repo;

import com.qanda.chat.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepo extends JpaRepository<Message, Integer> {
    List<Message> findByFromUserAndToUser(String fromUser, String toUser);
}
