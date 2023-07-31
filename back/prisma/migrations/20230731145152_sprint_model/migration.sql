/*
  Warnings:

  - Added the required column `sprintId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stage" ADD COLUMN     "endAtProd" TIMESTAMP(3),
ADD COLUMN     "startAtProd" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "sprintId" TEXT  NULL;

-- CreateTable
CREATE TABLE "Sprint" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sprint_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_sprintId_fkey" FOREIGN KEY ("sprintId") REFERENCES "Sprint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
