CREATE TABLE task (
  id bigint NOT NULL AUTO_INCREMENT,
  -- ticket bigint NOT NULL,
  created_at datetime NOT NULL,
  subject varchar(255) NOT NULL,

  description varchar(600) ,
  duration bigint,

  priority varchar(40),
  involved varchar(150),

  fk_task_requester bigint,
  fk_location bigint,
  fk_category bigint,
  fk_status bigint,

  PRIMARY KEY (id)
);

CREATE TABLE task_category (
  id bigint NOT NULL AUTO_INCREMENT,
  title varchar(80) NOT NULL,
  description varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE task_status (
  id bigint NOT NULL AUTO_INCREMENT,
  title varchar(80) NOT NULL,
  description varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE location (
  id bigint NOT NULL AUTO_INCREMENT,
  title varchar(80) NOT NULL,
  category varchar(30),

  PRIMARY KEY(id)
);

ALTER TABLE `controlcenter`.`task` 
ADD INDEX `fk_status_idx` (`fk_status` ASC) VISIBLE,
ADD INDEX `fk_category_idx` (`fk_category` ASC) VISIBLE,
ADD INDEX `fk_location_idx` (`fk_location` ASC) VISIBLE;
;
ALTER TABLE `controlcenter`.`task` 
ADD CONSTRAINT `fk_status`
  FOREIGN KEY (`fk_status`)
  REFERENCES `controlcenter`.`task_status` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_category`
  FOREIGN KEY (`fk_category`)
  REFERENCES `controlcenter`.`task_category` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_location`
  FOREIGN KEY (`fk_location`)
  REFERENCES `controlcenter`.`location` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- TODO - TASK FKs 
  -- REQUESTER
  -- KEY fk_task_requester_idx (fk_task_requester),
  -- CONSTRAINT fk_task_requester FOREIGN KEY (fk_task_requester) REFERENCES user (id)
