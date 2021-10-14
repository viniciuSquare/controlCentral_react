package com.squarelab.todos.domain.repository;

import com.squarelab.todos.domain.model.embedded.DeviceCategory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceCategoryRepository extends JpaRepository<DeviceCategory, Long>{}