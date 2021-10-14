package com.squarelab.todos.api.controller;

import com.squarelab.todos.domain.repository.TaskRepository;

import java.util.List;

import com.squarelab.todos.domain.model.Task;
import com.squarelab.todos.domain.model.embedded.TaskCategory;
import com.squarelab.todos.domain.model.embedded.TaskStatus;
import com.squarelab.todos.services.TaskService;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RequestMapping("/tasks")
@RestController
public class TaskController {

  private TaskRepository taskRepository;
  private TaskService taskService;

  @GetMapping
  public List<Task> toList(){
    return taskRepository.findAll();

  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Task newTask(@RequestBody Task task) {
    return taskService.delegate(task);
  }

  @PostMapping(path = "/category")
  public TaskCategory newCategory(@RequestBody TaskCategory category) {
    return taskService.newCategory(category);
  }

  @PostMapping(path = "/status")
  public TaskStatus newStatus(@RequestBody TaskStatus status) {
    return taskService.newStatus(status);
  }

}