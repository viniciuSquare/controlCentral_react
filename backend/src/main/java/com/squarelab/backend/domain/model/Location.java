package com.squarelab.backend.domain.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.squarelab.backend.domain.model.embedded.LocationCategory;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Location {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String title;

  @Enumerated(EnumType.STRING)
  private LocationCategory category;

}