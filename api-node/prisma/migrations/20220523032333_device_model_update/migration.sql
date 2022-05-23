/*
  Warnings:

  - You are about to drop the column `service_typeId` on the `Accounts` table. All the data in the column will be lost.
  - You are about to drop the column `brand` on the `Devices` table. All the data in the column will be lost.
  - You are about to drop the column `inventoryCode` on the `Devices` table. All the data in the column will be lost.
  - You are about to drop the column `serviceTag` on the `Devices` table. All the data in the column will be lost.
  - You are about to drop the `Service_type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Accounts` DROP FOREIGN KEY `Accounts_service_typeId_fkey`;

-- AlterTable
ALTER TABLE `Accounts` DROP COLUMN `service_typeId`,
    ADD COLUMN `serviceId` INTEGER NULL;

-- AlterTable
ALTER TABLE `DeviceCategories` ADD COLUMN `currentDevIdNumber` INTEGER NULL,
    ADD COLUMN `inventoryIDPrefix` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Devices` DROP COLUMN `brand`,
    DROP COLUMN `inventoryCode`,
    DROP COLUMN `serviceTag`,
    ADD COLUMN `inventoryID` VARCHAR(191) NULL,
    ADD COLUMN `manufacturer` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Service_type`;

-- CreateTable
CREATE TABLE `Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Accounts` ADD CONSTRAINT `Accounts_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
