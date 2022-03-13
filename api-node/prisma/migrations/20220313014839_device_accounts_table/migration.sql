-- CreateTable
CREATE TABLE `DeviceAccounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `intent` VARCHAR(191) NULL,
    `devicesId` INTEGER NULL,
    `accountsId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DeviceAccounts` ADD CONSTRAINT `DeviceAccounts_devicesId_fkey` FOREIGN KEY (`devicesId`) REFERENCES `Devices`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeviceAccounts` ADD CONSTRAINT `DeviceAccounts_accountsId_fkey` FOREIGN KEY (`accountsId`) REFERENCES `Accounts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
