package com.squarelab.backend.domain.exception;

public class BusinessException extends RuntimeException {
  public BusinessException(String message){
    super(message);
  }
}

