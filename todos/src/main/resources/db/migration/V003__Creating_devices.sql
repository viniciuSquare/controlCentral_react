CREATE TABLE `device` (
  `id` BIGINT NOT NULL,
  `alias` VARCHAR(45) NULL,
  `hostname` VARCHAR(60) NULL,
  `model` VARCHAR(60) NULL,
  `mac_cable` VARCHAR(45) NULL,
  `mac_wireless` VARCHAR(45) NULL,
  `ip_cable` VARCHAR(45) NULL,
  `ip_wireless` VARCHAR(45) NULL,
  `specification` VARCHAR(600) NULL,
  `ramal` VARCHAR(10) NULL,
  `fk_dev_location` BIGINT NULL,
  `fk_dev_category` BIGINT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `device_category` (
  `id` BIGINT NOT NULL,
  `title` VARCHAR(45) NULL,
  `is_net_dev` BOOLEAN,
  PRIMARY KEY (`id`));

ALTER TABLE `controlcenter`.`device` 
ADD INDEX `fk_dev_category_idx` (`fk_dev_category` ASC) VISIBLE,
ADD INDEX `fk_dev_location_idx` (`fk_dev_location` ASC) VISIBLE;
;
ALTER TABLE `controlcenter`.`device` 
ADD CONSTRAINT `fk_dev_category`
  FOREIGN KEY (`fk_dev_category`)
  REFERENCES `controlcenter`.`device_category` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_dev_location`
  FOREIGN KEY (`fk_dev_location`)
  REFERENCES `controlcenter`.`location` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;