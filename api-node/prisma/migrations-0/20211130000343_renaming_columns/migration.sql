/*
  Warnings:

  - You are about to drop the column `serviceName` on the `Service_type` table. All the data in the column will be lost.
  - You are about to drop the `Services_accounts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Service_type` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Services_accounts` DROP FOREIGN KEY `Services_accounts_service_typeId_fkey`;

-- DropForeignKey
ALTER TABLE `Services_accounts` DROP FOREIGN KEY `Services_accounts_userDevicesId_fkey`;

-- AlterTable
ALTER TABLE `Service_type` DROP COLUMN `serviceName`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Services_accounts`;

-- CreateTable
CREATE TABLE `Accounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(191) NOT NULL,
    `userDevicesId` INTEGER NOT NULL,
    `service_typeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Accounts` ADD CONSTRAINT `Accounts_service_typeId_fkey` FOREIGN KEY (`service_typeId`) REFERENCES `Service_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Accounts` ADD CONSTRAINT `Accounts_userDevicesId_fkey` FOREIGN KEY (`userDevicesId`) REFERENCES `UserDevices`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
