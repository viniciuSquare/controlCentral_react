package com.squarelab.todos.api.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.squarelab.todos.domain.model.Location;
import com.squarelab.todos.domain.repository.LocationRepository;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RequestMapping("/location")
@RestController
public class LocationController {

  private LocationRepository locationRepository;

  @GetMapping
  public List<Location> toList(){
    return locationRepository.findAll();
  }

  @GetMapping(path = "/category")
  public Map<String, String> toListCategories(){
    HashMap<String, String> map = new HashMap<>();
    map.put("0", "HOTEL");
    map.put("1", "FLAT");
    map.put("2", "SOCIAL");
    map.put("3", "ADMINISTRATIVO");
    map.put("4", "RESTAURANTES");
    map.put("5", "PDV");
    return map;
  };

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Location newLocation(@RequestBody Location location){
    return locationRepository.save(location);
  }

}