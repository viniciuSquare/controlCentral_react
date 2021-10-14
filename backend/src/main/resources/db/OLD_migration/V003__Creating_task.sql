CREATE TABLE task (
  id bigint NOT NULL AUTO_INCREMENT,
  ticket bigint NOT NULL,
  created_at datetime NOT NULL,
  subject varchar(255) NOT NULL,
  description varchar(600) NOT NULL,
  duration bigint,
  status varchar(100) NOT NULL,
  involved varchar(150),
  fk_task_requester bigint,
  PRIMARY KEY (id),
  KEY fk_task_requester_idx (fk_task_requester),
  CONSTRAINT fk_task_requester FOREIGN KEY (fk_task_requester) REFERENCES user (id)
);