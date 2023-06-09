/*
  Warnings:

  - You are about to drop the `Subobjective` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Subobjective" DROP CONSTRAINT "Subobjective_objectiveId_fkey";

-- DropTable
DROP TABLE "Subobjective";

-- CreateTable
CREATE TABLE "SubObjective" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'pending',
    "objectiveId" TEXT NOT NULL,

    CONSTRAINT "SubObjective_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubObjective" ADD CONSTRAINT "SubObjective_objectiveId_fkey" FOREIGN KEY ("objectiveId") REFERENCES "Objective"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
