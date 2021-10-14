package com.squarelab.todos.services;

import java.time.LocalDateTime;

import javax.transaction.Transactional;

import com.squarelab.todos.domain.model.Task;
import com.squarelab.todos.domain.model.User;
import com.squarelab.todos.domain.model.embedded.TaskCategory;
import com.squarelab.todos.domain.model.embedded.TaskStatus;
import com.squarelab.todos.domain.repository.TaskCategoryRepository;
import com.squarelab.todos.domain.repository.TaskRepository;
import com.squarelab.todos.domain.repository.TaskStatusRepository;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class TaskService {
  private TaskRepository taskRepository ;
  private TaskCategoryRepository taskCategoryRepository ;
  private TaskStatusRepository taskStatusRepository ;

  private UserService userService;

  @Transactional
  public Task delegate(Task task) {
    if(task.getRequester().getId() != null) {
      User user = userService.find(task.getRequester().getId());
      task.setRequester(user);

    }
    
    task.setCreatedAt(LocalDateTime.now());
    // task.setStatus(StatusTask.AGUARDANDOACAO);
    
    return taskRepository.save(task);
  }

  @Transactional
  public TaskCategory newCategory(TaskCategory category) {
    return taskCategoryRepository.save(category);
  }

  @Transactional
  public TaskStatus newStatus(TaskStatus status) {
    return taskStatusRepository.save(status);
  }

}