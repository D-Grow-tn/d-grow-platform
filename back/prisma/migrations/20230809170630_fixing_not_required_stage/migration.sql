-- DropForeignKey
ALTER TABLE "Stage" DROP CONSTRAINT "Stage_objectiveId_fkey";

-- AlterTable
ALTER TABLE "Stage" ALTER COLUMN "porcentage" DROP NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "objectiveId" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Stage" ADD CONSTRAINT "Stage_objectiveId_fkey" FOREIGN KEY ("objectiveId") REFERENCES "Objective"("id") ON DELETE SET NULL ON UPDATE CASCADE;
