/*
  Warnings:

  - You are about to drop the column `clientId` on the `Media` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Media" DROP CONSTRAINT "Media_clientId_fkey";

-- AlterTable
ALTER TABLE "Media" DROP COLUMN "clientId";
