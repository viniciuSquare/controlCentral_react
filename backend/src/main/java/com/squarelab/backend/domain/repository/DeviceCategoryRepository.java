package com.squarelab.backend.domain.repository;

import com.squarelab.backend.domain.model.embedded.DeviceCategory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceCategoryRepository extends JpaRepository<DeviceCategory, Long>{}