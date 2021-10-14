package com.squarelab.todos.domain.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.squarelab.todos.domain.model.embedded.DeviceCategory;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Device {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String alias;
  private String hostname;
  private String model;
  private String macCable;
  private String macWireless;
  private String ipCable;
  private String ipWireless;
  private String specification;
  private String ramal;

  @ManyToOne
  @JoinColumn(name = "fk_dev_location")
  private Location location;
  
  @ManyToOne
  @JoinColumn(name = "fk_dev_category")
  private DeviceCategory category;

}