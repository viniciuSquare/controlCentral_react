package com.squarelab.todos.services;


import javax.transaction.Transactional;

import com.squarelab.todos.domain.exception.BusinessException;
import com.squarelab.todos.domain.model.User;
import com.squarelab.todos.domain.repository.UserRepository;

import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class UserService {
  UserRepository userRepository;

  @Transactional
  public User save(User user) {
    boolean alreadyExistUsername = userRepository.findByUsername(user.getUsername())
      .stream()
      .anyMatch( existingUser -> !existingUser.equals(user) );

    if(alreadyExistUsername && user.getUsername()!=null) {
      throw new BusinessException("There is already a user with this username");
    }

    return userRepository.save(user);
  }

  public User find (Long userId) {
    return userRepository.findById(userId)
      .orElseThrow(() -> new BusinessException("User não encontrado"));    
  }

}