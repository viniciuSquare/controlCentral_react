/*
  Warnings:

  - You are about to drop the column `accountAddress` on the `Services_accounts` table. All the data in the column will be lost.
  - You are about to drop the column `serviceName` on the `Services_accounts` table. All the data in the column will be lost.
  - Added the required column `address` to the `Services_accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service_typeId` to the `Services_accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Services_accounts` DROP COLUMN `accountAddress`,
    DROP COLUMN `serviceName`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `service_typeId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Service_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `serviceName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Services_accounts` ADD CONSTRAINT `Services_accounts_service_typeId_fkey` FOREIGN KEY (`service_typeId`) REFERENCES `Service_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
