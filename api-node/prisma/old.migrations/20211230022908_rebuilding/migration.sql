/*
  Warnings:

  - Added the required column `departmentId` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ActionCategories` MODIFY `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `ActionStatus` MODIFY `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `DeviceCategories` MODIFY `isNetDev` BOOLEAN NULL;

-- AlterTable
ALTER TABLE `Locations` ADD COLUMN `isDepartment` BOOLEAN NULL,
    ADD COLUMN `locationsId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Tasks` ADD COLUMN `lastEditedAt` DATETIME(3) NULL,
    MODIFY `priority` VARCHAR(191) NULL,
    MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `ticket` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Users` ADD COLUMN `departmentId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Locations` ADD CONSTRAINT `Locations_locationsId_fkey` FOREIGN KEY (`locationsId`) REFERENCES `Locations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
