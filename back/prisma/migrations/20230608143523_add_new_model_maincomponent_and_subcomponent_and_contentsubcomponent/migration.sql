/*
  Warnings:

  - You are about to drop the `Button` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContentPage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Page` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Paragraph` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Section` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SectionContentPage` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TypeMainComponent" AS ENUM ('footer', 'header', 'sidebar', 'page');

-- CreateEnum
CREATE TYPE "PositionSubComponent" AS ENUM ('left', 'right', 'top', 'bottom', 'middle', 'section');

-- DropForeignKey
ALTER TABLE "Button" DROP CONSTRAINT "Button_sectionId_fkey";

-- DropForeignKey
ALTER TABLE "ContentPage" DROP CONSTRAINT "ContentPage_pageId_fkey";

-- DropForeignKey
ALTER TABLE "Paragraph" DROP CONSTRAINT "Paragraph_sectionId_fkey";

-- DropForeignKey
ALTER TABLE "SectionContentPage" DROP CONSTRAINT "SectionContentPage_contentPageId_fkey";

-- DropForeignKey
ALTER TABLE "SectionContentPage" DROP CONSTRAINT "SectionContentPage_sectionId_fkey";

-- DropTable
DROP TABLE "Button";

-- DropTable
DROP TABLE "ContentPage";

-- DropTable
DROP TABLE "Page";

-- DropTable
DROP TABLE "Paragraph";

-- DropTable
DROP TABLE "Section";

-- DropTable
DROP TABLE "SectionContentPage";

-- CreateTable
CREATE TABLE "MainComponent" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "path" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "TypeMainComponent" NOT NULL,

    CONSTRAINT "MainComponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubComponent" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "mainId" TEXT NOT NULL,
    "position" "PositionSubComponent" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubComponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentSubComponent" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "navigateTo" TEXT,
    "content" TEXT NOT NULL,
    "subComponentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContentSubComponent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MainComponent_path_key" ON "MainComponent"("path");

-- AddForeignKey
ALTER TABLE "SubComponent" ADD CONSTRAINT "SubComponent_mainId_fkey" FOREIGN KEY ("mainId") REFERENCES "MainComponent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentSubComponent" ADD CONSTRAINT "ContentSubComponent_subComponentId_fkey" FOREIGN KEY ("subComponentId") REFERENCES "SubComponent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
