-- AlterTable
ALTER TABLE "MediaEvent" ADD COLUMN     "historyId" TEXT;

-- AlterTable
ALTER TABLE "Membership" ADD COLUMN     "historyId" TEXT;

-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "History"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MediaEvent" ADD CONSTRAINT "MediaEvent_historyId_fkey" FOREIGN KEY ("historyId") REFERENCES "History"("id") ON DELETE SET NULL ON UPDATE CASCADE;
