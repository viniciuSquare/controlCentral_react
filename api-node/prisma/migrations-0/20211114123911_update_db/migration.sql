-- DropForeignKey
ALTER TABLE `Devices` DROP FOREIGN KEY `Devices_deviceCategoryId_fkey`;

-- AlterTable
ALTER TABLE `Devices` MODIFY `deviceCategoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Devices` ADD CONSTRAINT `Devices_deviceCategoryId_fkey` FOREIGN KEY (`deviceCategoryId`) REFERENCES `DeviceCategory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
