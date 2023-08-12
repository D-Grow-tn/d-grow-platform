/*
  Warnings:

  - You are about to drop the column `contractId` on the `Project` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[projectId]` on the table `Contract` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_contractId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "contractId";

-- CreateIndex
CREATE UNIQUE INDEX "Contract_projectId_key" ON "Contract"("projectId");

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
