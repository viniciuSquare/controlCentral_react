-- AlterTable
ALTER TABLE `Devices` MODIFY `specification` VARCHAR(191) NULL,
    MODIFY `macCable` VARCHAR(191) NULL,
    MODIFY `macWireless` VARCHAR(191) NULL,
    MODIFY `ipCable` VARCHAR(191) NULL,
    MODIFY `ipWireless` VARCHAR(191) NULL,
    MODIFY `state` VARCHAR(191) NULL,
    MODIFY `isSource` BOOLEAN NULL;
