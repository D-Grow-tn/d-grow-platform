-- AlterTable
ALTER TABLE "ContentSubComponent" ADD COLUMN     "mediaId" TEXT,
ADD COLUMN     "previousContentSubComponentId" TEXT;

-- AddForeignKey
ALTER TABLE "ContentSubComponent" ADD CONSTRAINT "ContentSubComponent_previousContentSubComponentId_fkey" FOREIGN KEY ("previousContentSubComponentId") REFERENCES "ContentSubComponent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentSubComponent" ADD CONSTRAINT "ContentSubComponent_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
