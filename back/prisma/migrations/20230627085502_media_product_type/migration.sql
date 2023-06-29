-- CreateTable
CREATE TABLE "MediaProductType" (
    "mediaId" TEXT NOT NULL,
    "productTypeId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MediaProductType_mediaId_productTypeId_key" ON "MediaProductType"("mediaId", "productTypeId");

-- AddForeignKey
ALTER TABLE "MediaProductType" ADD CONSTRAINT "MediaProductType_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MediaProductType" ADD CONSTRAINT "MediaProductType_productTypeId_fkey" FOREIGN KEY ("productTypeId") REFERENCES "ProductType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
