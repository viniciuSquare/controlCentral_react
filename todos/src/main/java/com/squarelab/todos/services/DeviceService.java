package com.squarelab.todos.services;

import javax.transaction.Transactional;

import com.squarelab.todos.domain.model.Device;
import com.squarelab.todos.domain.model.embedded.DeviceCategory;
import com.squarelab.todos.domain.repository.DeviceCategoryRepository;
import com.squarelab.todos.domain.repository.DeviceRepository;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class DeviceService{
  private DeviceRepository deviceRepository;
  private DeviceCategoryRepository deviceCategoryRepository;

  @Transactional
  public Device newDevice(Device device) {
    return deviceRepository.save(device);
  }

  @Transactional
  public DeviceCategory newCategory(DeviceCategory category){
    return deviceCategoryRepository.save(category);
  }


}