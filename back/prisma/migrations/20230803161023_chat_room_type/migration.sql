/*
  Warnings:

  - You are about to drop the column `content` on the `ChatRoom` table. All the data in the column will be lost.
  - Added the required column `title` to the `ChatRoom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `ChatRoom` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ChatGroupType" AS ENUM ('group', 'project', 'pair');

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_sprintId_fkey";

-- AlterTable
ALTER TABLE "ChatRoom" DROP COLUMN "content",
ADD COLUMN     "priojectId" TEXT,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "type" "ChatGroupType" NOT NULL;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_sprintId_fkey" FOREIGN KEY ("sprintId") REFERENCES "Sprint"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_priojectId_fkey" FOREIGN KEY ("priojectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
