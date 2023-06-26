/*
  Warnings:

  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "productCoverId" TEXT;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productCoverId_fkey" FOREIGN KEY ("productCoverId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
