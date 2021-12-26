/*
  Warnings:

  - You are about to drop the column `category` on the `Locations` table. All the data in the column will be lost.
  - You are about to drop the `DeviceCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Devices` DROP FOREIGN KEY `Devices_deviceCategoryId_fkey`;

-- AlterTable
ALTER TABLE `Devices` ADD COLUMN `operationalCategoriesId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Locations` DROP COLUMN `category`,
    ADD COLUMN `operationalCategoriesId` INTEGER NULL;

-- DropTable
DROP TABLE `DeviceCategory`;

-- CreateTable
CREATE TABLE `DeviceCategories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `isNetDev` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OperationalCategories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Devices` ADD CONSTRAINT `Devices_deviceCategoryId_fkey` FOREIGN KEY (`deviceCategoryId`) REFERENCES `DeviceCategories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Devices` ADD CONSTRAINT `Devices_operationalCategoriesId_fkey` FOREIGN KEY (`operationalCategoriesId`) REFERENCES `OperationalCategories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Locations` ADD CONSTRAINT `Locations_operationalCategoriesId_fkey` FOREIGN KEY (`operationalCategoriesId`) REFERENCES `OperationalCategories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
