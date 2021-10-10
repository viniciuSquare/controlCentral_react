CREATE TABLE user (
  id bigint NOT NULL AUTO_INCREMENT,
  name varchar(60) NOT NULL,
  username varchar(40),
  contact_email varchar(40),
  contact_GAccount varchar(40),
  contact_ramal varchar(45),
  contact_whatsapp varchar(40),
  fk_user_department bigint,
  PRIMARY KEY (id),
  CONSTRAINT fk_user_department FOREIGN KEY (fk_user_department) REFERENCES user (id)
) ;