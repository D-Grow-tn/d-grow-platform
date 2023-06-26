/*
  Warnings:

  - You are about to drop the column `recieverId` on the `Behavior` table. All the data in the column will be lost.
  - You are about to drop the column `recieverId` on the `Request` table. All the data in the column will be lost.
  - Added the required column `receiverId` to the `Behavior` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiverId` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Behavior" DROP CONSTRAINT "Behavior_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_receiverId_fkey";

-- AlterTable
ALTER TABLE "Behavior" DROP COLUMN "receiverId",
ADD COLUMN     "receiverId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Request" DROP COLUMN "recieverId",
ADD COLUMN     "receiverId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Behavior" ADD CONSTRAINT "Behavior_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
