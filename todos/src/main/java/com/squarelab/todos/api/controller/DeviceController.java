package com.squarelab.todos.api.controller;

import java.util.List;

import com.squarelab.todos.domain.model.Device;
import com.squarelab.todos.domain.model.embedded.DeviceCategory;
import com.squarelab.todos.domain.repository.DeviceRepository;
import com.squarelab.todos.services.DeviceService;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/devices")
@RestController
public class DeviceController{

  DeviceRepository deviceRepository;
  DeviceService deviceService;

  @GetMapping
  public List<Device> toList() {
    return deviceRepository.findAll();
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Device newDevice(@RequestBody Device device){
    return deviceService.newDevice(device);
  }

  @PostMapping(path = "/category")
  public DeviceCategory newCategory(@RequestBody DeviceCategory category) {
    return deviceService.newCategory(category);
  }


}