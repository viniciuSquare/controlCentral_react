package com.squarelab.todos.domain.model.embedded;

import javax.persistence.Embeddable;

@Embeddable
public enum LocationCategory {
  HOTEL, FLAT, SOCIAL, ADMINISTRATIVO, RESTAURANTES, PDV;
}