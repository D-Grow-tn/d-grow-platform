/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `MainComponent` will be added. If there are existing duplicate values, this will fail.
  - Made the column `title` on table `MainComponent` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "MainComponent" ALTER COLUMN "title" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "MainComponent_title_key" ON "MainComponent"("title");
