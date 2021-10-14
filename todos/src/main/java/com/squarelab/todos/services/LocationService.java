package com.squarelab.todos.services;

import javax.transaction.Transactional;

import com.squarelab.todos.domain.model.Location;
import com.squarelab.todos.domain.repository.LocationRepository;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class LocationService{
  private LocationRepository locationRepository;

  @Transactional
  private Location newLocation(Location location){
    return locationRepository.save(location);
  }


}