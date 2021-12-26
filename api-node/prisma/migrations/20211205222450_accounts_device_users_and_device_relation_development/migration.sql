/*
  Warnings:

  - You are about to drop the column `DeviceUserId` on the `Accounts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Accounts` DROP FOREIGN KEY `Accounts_DeviceUserId_fkey`;

-- AlterTable
ALTER TABLE `Accounts` DROP COLUMN `DeviceUserId`;

-- AlterTable
ALTER TABLE `DeviceUser` ADD COLUMN `accountsId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `DeviceUser` ADD CONSTRAINT `DeviceUser_accountsId_fkey` FOREIGN KEY (`accountsId`) REFERENCES `Accounts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
