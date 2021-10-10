package com.squarelab.todos.domain.model;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.squarelab.todos.domain.model.embedded.Contact;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class User {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  
  private String username;

  @ManyToOne
  @JoinColumn(name = "fk_user_sector")
  private Location sector;

  @Embedded
  private Contact contacts;

}
