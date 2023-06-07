/*
  Warnings:

  - You are about to drop the column `contentPageId` on the `Section` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Section" DROP CONSTRAINT "Section_contentPageId_fkey";

-- AlterTable
ALTER TABLE "Section" DROP COLUMN "contentPageId";

-- CreateTable
CREATE TABLE "SectionContentPage" (
    "sectionId" TEXT NOT NULL,
    "contentPageId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "SectionContentPage_sectionId_contentPageId_key" ON "SectionContentPage"("sectionId", "contentPageId");

-- AddForeignKey
ALTER TABLE "SectionContentPage" ADD CONSTRAINT "SectionContentPage_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SectionContentPage" ADD CONSTRAINT "SectionContentPage_contentPageId_fkey" FOREIGN KEY ("contentPageId") REFERENCES "ContentPage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
