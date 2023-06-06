/*
  Warnings:

  - You are about to drop the `Ines` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rania` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_InesToRania` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_InesToRania" DROP CONSTRAINT "_InesToRania_A_fkey";

-- DropForeignKey
ALTER TABLE "_InesToRania" DROP CONSTRAINT "_InesToRania_B_fkey";

-- DropTable
DROP TABLE "Ines";

-- DropTable
DROP TABLE "Rania";

-- DropTable
DROP TABLE "_InesToRania";
