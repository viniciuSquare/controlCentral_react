package com.squarelab.todos.domain.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import com.squarelab.todos.domain.model.embedded.TaskCategory;
import com.squarelab.todos.domain.model.embedded.TaskStatus;
import com.squarelab.todos.domain.model.embedded.Priority;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Setter
@Getter
@Entity
public class Task {

  @EqualsAndHashCode.Include
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String subject;

  private String description;

  private String involved;
  
  // CLIENT
  @ManyToOne
  @JoinColumn(name = "fk_task_requester")
  private User requester;
  
  @ManyToOne
  @JoinColumn(name = "fk_task_location")
  private Location location;
  
  @ManyToOne
  @JoinColumn(name = "fk_task_category")
  private TaskCategory category;
  
  @ManyToOne
  @JoinColumn(name = "fk_task_status")
  private TaskStatus status;

  private int duration;

  @Enumerated(EnumType.STRING)
  private Priority priority;

  @JsonProperty(access = Access.READ_ONLY)
  private LocalDateTime createdAt;

}