/*
  Warnings:

  - You are about to drop the column `historyId` on the `MediaEvent` table. All the data in the column will be lost.
  - The primary key for the `Membership` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `historyId` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the `History` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[eventId,employeeId]` on the table `Membership` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "History" DROP CONSTRAINT "History_eventId_fkey";

-- DropForeignKey
ALTER TABLE "MediaEvent" DROP CONSTRAINT "MediaEvent_historyId_fkey";

-- DropForeignKey
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_historyId_fkey";

-- AlterTable
ALTER TABLE "MediaEvent" DROP COLUMN "historyId";

-- AlterTable
ALTER TABLE "Membership" DROP CONSTRAINT "Membership_pkey",
DROP COLUMN "historyId";

-- DropTable
DROP TABLE "History";

-- CreateIndex
CREATE UNIQUE INDEX "Membership_eventId_employeeId_key" ON "Membership"("eventId", "employeeId");
