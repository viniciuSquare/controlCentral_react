package com.squarelab.backend.services;

import javax.transaction.Transactional;

import com.squarelab.backend.domain.model.Device;
import com.squarelab.backend.domain.model.embedded.DeviceCategory;
import com.squarelab.backend.domain.repository.DeviceCategoryRepository;
import com.squarelab.backend.domain.repository.DeviceRepository;

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