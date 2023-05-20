package com.qanda.qanda.Controller;

import com.qanda.qanda.Service.UserService;
import com.qanda.qanda.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserService userservice;

    @PostMapping("/login")
    private String login(@RequestBody HashMap<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");
        if (email.equals("admin@gmail.com") && password.equals("admin@123")) {
            return "admin";
        } else if (userservice.isExists(email, password)) {
            return "ok";
        } else {
            return "no";
        }
    }


    @GetMapping("/useremail/{email}")
    private User getUserByEmail(@PathVariable String email) {
        return userservice.findByEmail(email);
    }

    @PostMapping("/register")
    private String Register(@RequestBody User u) {
        if (userservice.isExists(u.getEmail(), u.getPassword())) {
            return "no";
        } else {
            userservice.save(u);
            return "ok";
        }
    }

    @GetMapping("/user/{id}")
    private User user(@PathVariable int id) {
        try {
            return userservice.getById(id);
        } catch (Exception e) {
            return new User();
        }
    }

    @GetMapping("/users/unique/{name}")
    private List<String> getUniqueUsers(@PathVariable String name) {
        return userservice.getByDistinct(name);
    }

    @DeleteMapping("/deleteuser/{email}")
    private String deleteUser(@PathVariable String email) {
        if (userservice.findByEmail(email) != null) {
            userservice.delete(email);
            return "ok";
        }
        return "no";
    }
}
