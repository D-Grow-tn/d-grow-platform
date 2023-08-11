-- AlterTable
ALTER TABLE "ContentSubComponent" ADD COLUMN     "mediaId" TEXT,
ADD COLUMN     "previousContentSubComponentId" TEXT;

-- CreateTable
CREATE TABLE "DailyWorkTime" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "totalWorkTime" INTEGER NOT NULL,
    "totalBreakTime" INTEGER NOT NULL,

    CONSTRAINT "DailyWorkTime_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DailyWorkTime" ADD CONSTRAINT "DailyWorkTime_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentSubComponent" ADD CONSTRAINT "ContentSubComponent_previousContentSubComponentId_fkey" FOREIGN KEY ("previousContentSubComponentId") REFERENCES "ContentSubComponent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentSubComponent" ADD CONSTRAINT "ContentSubComponent_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
