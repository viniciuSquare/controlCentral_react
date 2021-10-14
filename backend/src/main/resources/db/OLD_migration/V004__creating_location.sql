CREATE TABLE `location` (
  `id` BIGINT NOT NULL,
  `name` VARCHAR(25) NOT NULL,
  `category` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`)
);
ALTER TABLE `backend`.`task` 
ADD COLUMN `fk_location` BIGINT NULL AFTER `fk_task_requester`,
ADD INDEX `fk_location_idx` (`fk_location` ASC) VISIBLE;
;
ALTER TABLE `backend`.`task` 
ADD CONSTRAINT `fk_location`
  FOREIGN KEY (`fk_location`)
  REFERENCES `backend`.`location` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
