/*
  Warnings:

  - You are about to drop the column `alias` on the `Devices` table. All the data in the column will be lost.
  - You are about to drop the column `operationalCategoriesId` on the `Devices` table. All the data in the column will be lost.
  - Made the column `hostname` on table `Devices` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Devices` DROP COLUMN `alias`,
    DROP COLUMN `operationalCategoriesId`,
    MODIFY `hostname` VARCHAR(191) NOT NULL;
