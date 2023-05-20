package com.qanda.qanda.Repository;

import com.qanda.qanda.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);

    User findByPassword(String password);

    @Query("SELECT u.name FROM User u WHERE u.name!=:name")
    List<String> getByUniqueUser(@Param("name") String name);
}
