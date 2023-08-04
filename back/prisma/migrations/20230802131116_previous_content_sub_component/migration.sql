-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_sprintId_fkey";

-- AlterTable
ALTER TABLE "ContentSubComponent" ADD COLUMN     "previousContentSubComponentId" TEXT;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_sprintId_fkey" FOREIGN KEY ("sprintId") REFERENCES "Sprint"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentSubComponent" ADD CONSTRAINT "ContentSubComponent_previousContentSubComponentId_fkey" FOREIGN KEY ("previousContentSubComponentId") REFERENCES "ContentSubComponent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
