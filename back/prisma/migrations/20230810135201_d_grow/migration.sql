-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_contractId_fkey";

-- DropIndex
DROP INDEX "Contract_projectId_key";

-- DropIndex
DROP INDEX "Project_contractId_key";

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
