-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "contractId" TEXT;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
