/*
  Warnings:

  - You are about to drop the column `accountsId` on the `DeviceUser` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `DeviceUser` DROP FOREIGN KEY `DeviceUser_accountsId_fkey`;

-- AlterTable
ALTER TABLE `DeviceAccounts` ADD COLUMN `type` ENUM('DEFAULT', 'LICENCED') NULL;

-- AlterTable
ALTER TABLE `DeviceCategories` MODIFY `currentDevIdNumber` INTEGER NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `DeviceUser` DROP COLUMN `accountsId`;

-- AlterTable
ALTER TABLE `Service` ADD COLUMN `serviceControllerURL` VARCHAR(191) NULL;
