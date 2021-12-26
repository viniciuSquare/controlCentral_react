/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Tasks` DROP FOREIGN KEY `Tasks_userId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_locationsId_fkey`;

-- DropForeignKey
ALTER TABLE `UserDevices` DROP FOREIGN KEY `UserDevices_userId_fkey`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `locationsId` INTEGER NOT NULL,

    UNIQUE INDEX `Users_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_locationsId_fkey` FOREIGN KEY (`locationsId`) REFERENCES `Locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserDevices` ADD CONSTRAINT `UserDevices_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
