-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_stageId_fkey";

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
