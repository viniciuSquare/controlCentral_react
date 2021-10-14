package com.squarelab.backend.domain.model.embedded;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "task_category")
public class TaskCategory {
  
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Id
  private Long id;
  private String title;
  private String description;

}