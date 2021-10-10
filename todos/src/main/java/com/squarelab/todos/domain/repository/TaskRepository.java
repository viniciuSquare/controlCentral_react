package com.squarelab.todos.domain.repository;

import com.squarelab.todos.domain.model.Task;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
  // List<Task> findByDepartament(String departamento);
  // List<Task> findByTicketNumber(int ticketNumber);
  // List<Task> findByDueDate(LocalDate date);

}