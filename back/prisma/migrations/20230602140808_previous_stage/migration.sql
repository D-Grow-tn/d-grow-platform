-- AlterTable
ALTER TABLE "Stage" ADD COLUMN     "previousStageId" TEXT;

-- AddForeignKey
ALTER TABLE "Stage" ADD CONSTRAINT "Stage_previousStageId_fkey" FOREIGN KEY ("previousStageId") REFERENCES "Stage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
