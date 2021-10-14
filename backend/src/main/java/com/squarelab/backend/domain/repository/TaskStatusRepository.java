package com.squarelab.backend.domain.repository;

import com.squarelab.backend.domain.model.embedded.TaskStatus;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskStatusRepository extends JpaRepository<TaskStatus, Long> {

}