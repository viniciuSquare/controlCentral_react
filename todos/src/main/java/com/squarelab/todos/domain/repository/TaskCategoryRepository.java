package com.squarelab.todos.domain.repository;

import com.squarelab.todos.domain.model.embedded.TaskCategory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskCategoryRepository extends JpaRepository<TaskCategory, Long> {

}