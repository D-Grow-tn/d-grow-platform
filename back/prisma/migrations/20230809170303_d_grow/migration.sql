-- AlterTable
ALTER TABLE "ContentSubComponent" ADD COLUMN     "mediaId" TEXT,
ADD COLUMN     "previousContentSubComponentId" TEXT;

-- CreateTable
CREATE TABLE "Contract" (
    "id" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "clientId" TEXT,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentSubComponent" ADD CONSTRAINT "ContentSubComponent_previousContentSubComponentId_fkey" FOREIGN KEY ("previousContentSubComponentId") REFERENCES "ContentSubComponent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentSubComponent" ADD CONSTRAINT "ContentSubComponent_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
