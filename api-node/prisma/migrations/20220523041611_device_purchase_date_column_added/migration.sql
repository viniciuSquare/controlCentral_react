-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `Users` DROP FOREIGN KEY `Users_locationsId_fkey`;

-- AlterTable
ALTER TABLE `Accounts` ADD COLUMN `licencePurchase` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Devices` ADD COLUMN `purchaseDate` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Users` MODIFY `locationsId` INTEGER NULL,
    MODIFY `departmentId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Locations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_locationsId_fkey` FOREIGN KEY (`locationsId`) REFERENCES `Locations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
