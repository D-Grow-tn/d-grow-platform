-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_directManegerId_fkey";

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "directManegerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_directManegerId_fkey" FOREIGN KEY ("directManegerId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
