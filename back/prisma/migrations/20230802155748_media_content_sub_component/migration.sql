-- AlterTable
ALTER TABLE "ContentSubComponent" ADD COLUMN     "mediaId" TEXT;

-- AddForeignKey
ALTER TABLE "ContentSubComponent" ADD CONSTRAINT "ContentSubComponent_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
