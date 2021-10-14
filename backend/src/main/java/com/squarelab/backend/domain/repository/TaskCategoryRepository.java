package com.squarelab.backend.domain.repository;

import com.squarelab.backend.domain.model.embedded.TaskCategory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskCategoryRepository extends JpaRepository<TaskCategory, Long> {

}