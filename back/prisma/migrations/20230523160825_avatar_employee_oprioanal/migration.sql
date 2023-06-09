/*
  Warnings:

  - You are about to drop the column `avatar` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `mediaId` on the `Employee` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_mediaId_fkey";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "avatar",
DROP COLUMN "mediaId",
ADD COLUMN     "avatarId" TEXT;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
