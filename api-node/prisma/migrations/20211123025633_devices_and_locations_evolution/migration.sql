/*
  Warnings:

  - You are about to drop the column `operationalCategoriesId` on the `Locations` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Locations` DROP FOREIGN KEY `Locations_operationalCategoriesId_fkey`;

-- AlterTable
ALTER TABLE `Devices` ADD COLUMN `cpu` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Locations` DROP COLUMN `operationalCategoriesId`,
    ADD COLUMN `operationalCategoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Locations` ADD CONSTRAINT `Locations_operationalCategoryId_fkey` FOREIGN KEY (`operationalCategoryId`) REFERENCES `OperationalCategories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
