/*
  Warnings:

  - You are about to drop the column `userDevicesId` on the `Accounts` table. All the data in the column will be lost.
  - You are about to drop the `UserDevices` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `DeviceUserId` to the `Accounts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Accounts` DROP FOREIGN KEY `Accounts_userDevicesId_fkey`;

-- DropForeignKey
ALTER TABLE `UserDevices` DROP FOREIGN KEY `UserDevices_devicesId_fkey`;

-- DropForeignKey
ALTER TABLE `UserDevices` DROP FOREIGN KEY `UserDevices_locationId_fkey`;

-- DropForeignKey
ALTER TABLE `UserDevices` DROP FOREIGN KEY `UserDevices_userId_fkey`;

-- AlterTable
ALTER TABLE `Accounts` DROP COLUMN `userDevicesId`,
    ADD COLUMN `DeviceUserId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Service_type` ADD COLUMN `description` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `UserDevices`;

-- CreateTable
CREATE TABLE `DeviceUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `locationId` INTEGER NOT NULL,
    `devicesId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DeviceUser` ADD CONSTRAINT `DeviceUser_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeviceUser` ADD CONSTRAINT `DeviceUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeviceUser` ADD CONSTRAINT `DeviceUser_devicesId_fkey` FOREIGN KEY (`devicesId`) REFERENCES `Devices`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Accounts` ADD CONSTRAINT `Accounts_DeviceUserId_fkey` FOREIGN KEY (`DeviceUserId`) REFERENCES `DeviceUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
