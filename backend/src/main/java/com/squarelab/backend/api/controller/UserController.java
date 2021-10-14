package com.squarelab.backend.api.controller;

import java.util.List;

import javax.transaction.Transactional;

import com.squarelab.backend.domain.repository.UserRepository;
import com.squarelab.backend.services.UserService;
import com.squarelab.backend.domain.model.User;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RequestMapping("/users")
@RestController
public class UserController {

  private UserRepository userRepository;
  private UserService userService;

  @PostMapping
  @Transactional
  public User register(@RequestBody User user) {
    return userService.save(user);
  }

  @GetMapping
  public List<User> list() {
    return userRepository.findAll();
  }

  @PutMapping("/{userId}")
  public ResponseEntity<User> update(@PathVariable Long userId, @RequestBody User user) {
    if(!userRepository.existsById(userId)) {
      return ResponseEntity.notFound().build();
    } else {
      user.setId(userId);
      user = userService.save(user);

      return ResponseEntity.ok(user);
    }
  }
}