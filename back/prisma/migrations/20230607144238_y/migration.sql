/*
  Warnings:

  - You are about to drop the column `employeeId` on the `Decision` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Decision" DROP CONSTRAINT "Decision_employeeId_fkey";

-- AlterTable
ALTER TABLE "Decision" DROP COLUMN "employeeId";

-- CreateTable
CREATE TABLE "DecisionApply" (
    "decisionId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DecisionApply_decisionId_employeeId_key" ON "DecisionApply"("decisionId", "employeeId");

-- AddForeignKey
ALTER TABLE "DecisionApply" ADD CONSTRAINT "DecisionApply_decisionId_fkey" FOREIGN KEY ("decisionId") REFERENCES "Decision"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DecisionApply" ADD CONSTRAINT "DecisionApply_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
