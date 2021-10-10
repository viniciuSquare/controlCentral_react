package com.squarelab.todos.domain.model.embedded;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Embeddable
public class Contact {

  @Email
  @Column(name = "contact_email")
  private String email;
  
  @Email
  @Column(name = "contact_GAccount")
  private String googleAccount;
  
  @Size(max = 6)
  @Column(name = "contact_ramal")
  private String ramal;
  
  @Size(max = 20)
  @Column(name = "contact_whatsapp")
  private String whatsapp;
  
}
