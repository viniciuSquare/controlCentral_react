-- CreateTable
CREATE TABLE `Devices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `alias` VARCHAR(191) NOT NULL,
    `specification` VARCHAR(191) NOT NULL,
    `macCable` VARCHAR(191) NOT NULL,
    `macWireless` VARCHAR(191) NOT NULL,
    `ipCable` VARCHAR(191) NOT NULL,
    `ipWireless` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `isSource` BOOLEAN NOT NULL,
    `deviceCategoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DeviceCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `isNetDev` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tasks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subject` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `priority` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `ticket` VARCHAR(191) NOT NULL,
    `locationsId` INTEGER NOT NULL,
    `actionCategoriesId` INTEGER NOT NULL,
    `actionStatusId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ActionCategories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ActionStatus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Locations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `locationsId` INTEGER NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserDevices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `locationId` INTEGER NOT NULL,
    `devicesId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Services_accounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `serviceName` VARCHAR(191) NOT NULL,
    `accountAddress` VARCHAR(191) NOT NULL,
    `userDevicesId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Devices` ADD CONSTRAINT `Devices_deviceCategoryId_fkey` FOREIGN KEY (`deviceCategoryId`) REFERENCES `DeviceCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_actionCategoriesId_fkey` FOREIGN KEY (`actionCategoriesId`) REFERENCES `ActionCategories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_locationsId_fkey` FOREIGN KEY (`locationsId`) REFERENCES `Locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_actionStatusId_fkey` FOREIGN KEY (`actionStatusId`) REFERENCES `ActionStatus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_locationsId_fkey` FOREIGN KEY (`locationsId`) REFERENCES `Locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserDevices` ADD CONSTRAINT `UserDevices_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserDevices` ADD CONSTRAINT `UserDevices_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserDevices` ADD CONSTRAINT `UserDevices_devicesId_fkey` FOREIGN KEY (`devicesId`) REFERENCES `Devices`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Services_accounts` ADD CONSTRAINT `Services_accounts_userDevicesId_fkey` FOREIGN KEY (`userDevicesId`) REFERENCES `UserDevices`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
