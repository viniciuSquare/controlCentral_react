CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `username` varchar(40) DEFAULT NULL,
  `fk_user_sector` bigint DEFAULT NULL,
  `contact_email` varchar(40) DEFAULT NULL,
  `contact_GAccount` varchar(40) DEFAULT NULL,
  `contact_ramal` varchar(45) DEFAULT NULL,
  `contact_whatsapp` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `controlcenter`.`user` 
ADD INDEX `fk_user_sector_idx` (`fk_user_sector` ASC) VISIBLE;
;
ALTER TABLE `controlcenter`.`user` 
ADD CONSTRAINT `fk_user_sector`
  FOREIGN KEY (`fk_user_sector`)
  REFERENCES `controlcenter`.`location` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
