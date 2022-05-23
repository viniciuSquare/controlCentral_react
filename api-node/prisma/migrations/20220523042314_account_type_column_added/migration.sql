/*
  Warnings:

  - You are about to drop the column `type` on the `DeviceAccounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Accounts` ADD COLUMN `type` ENUM('DEFAULT', 'LICENCED') NULL;

-- AlterTable
ALTER TABLE `DeviceAccounts` DROP COLUMN `type`;
