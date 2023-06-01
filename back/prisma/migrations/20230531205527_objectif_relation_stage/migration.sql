-- AddForeignKey
ALTER TABLE "Stage" ADD CONSTRAINT "Stage_objectiveId_fkey" FOREIGN KEY ("objectiveId") REFERENCES "Objective"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
