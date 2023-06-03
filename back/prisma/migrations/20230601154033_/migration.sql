/*
  Warnings:

  - Made the column `avatarClientId` on table `Client` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_avatarClientId_fkey";

-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "avatarClientId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_avatarClientId_fkey" FOREIGN KEY ("avatarClientId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
