/*
  Warnings:

  - You are about to drop the `Invoice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - The required column `id` was added to the `EmployeeQuiz` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Made the column `startAt` on table `Stage` required. This step will fail if there are existing NULL values in that column.
  - Made the column `endAt` on table `Stage` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_stageId_fkey";

-- AlterTable
ALTER TABLE "EmployeeQuiz" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "EmployeeQuiz_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Stage" ALTER COLUMN "porcentage" DROP NOT NULL,
ALTER COLUMN "startAt" SET NOT NULL,
ALTER COLUMN "endAt" SET NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL;

-- DropTable
DROP TABLE "Invoice";

-- DropTable
DROP TABLE "Item";

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
