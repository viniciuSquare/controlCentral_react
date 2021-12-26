-- CreateTable
CREATE TABLE `Devices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `alias` VARCHAR(191) NOT NULL,
    `specification` VARCHAR(191) NULL,
    `serviceTag` VARCHAR(191) NULL,
    `cpu` VARCHAR(191) NULL,
    `macCable` VARCHAR(191) NULL,
    `macWireless` VARCHAR(191) NULL,
    `ipCable` VARCHAR(191) NULL,
    `ipWireless` VARCHAR(191) NULL,
    `state` VARCHAR(191) NULL,
    `isSource` BOOLEAN NULL,
    `deviceCategoryId` INTEGER NULL,
    `operationalCategoriesId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DeviceCategories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `isNetDev` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OperationalCategories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Locations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `operationalCategoryId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `locationsId` INTEGER NOT NULL,

    UNIQUE INDEX `Users_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DeviceUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `locationId` INTEGER NOT NULL,
    `devicesId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Accounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(191) NOT NULL,
    `DeviceUserId` INTEGER NOT NULL,
    `service_typeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

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

-- AddForeignKey
ALTER TABLE `Devices` ADD CONSTRAINT `Devices_deviceCategoryId_fkey` FOREIGN KEY (`deviceCategoryId`) REFERENCES `DeviceCategories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Devices` ADD CONSTRAINT `Devices_operationalCategoriesId_fkey` FOREIGN KEY (`operationalCategoriesId`) REFERENCES `OperationalCategories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Locations` ADD CONSTRAINT `Locations_operationalCategoryId_fkey` FOREIGN KEY (`operationalCategoryId`) REFERENCES `OperationalCategories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_locationsId_fkey` FOREIGN KEY (`locationsId`) REFERENCES `Locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeviceUser` ADD CONSTRAINT `DeviceUser_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeviceUser` ADD CONSTRAINT `DeviceUser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeviceUser` ADD CONSTRAINT `DeviceUser_devicesId_fkey` FOREIGN KEY (`devicesId`) REFERENCES `Devices`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Accounts` ADD CONSTRAINT `Accounts_service_typeId_fkey` FOREIGN KEY (`service_typeId`) REFERENCES `Service_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Accounts` ADD CONSTRAINT `Accounts_DeviceUserId_fkey` FOREIGN KEY (`DeviceUserId`) REFERENCES `DeviceUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_actionCategoriesId_fkey` FOREIGN KEY (`actionCategoriesId`) REFERENCES `ActionCategories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_locationsId_fkey` FOREIGN KEY (`locationsId`) REFERENCES `Locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_actionStatusId_fkey` FOREIGN KEY (`actionStatusId`) REFERENCES `ActionStatus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
