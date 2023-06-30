-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('button', 'paragraph', 'image', 'select');

-- AlterTable
ALTER TABLE "ContentSubComponent" ADD COLUMN     "subContent" JSONB,
ADD COLUMN     "type" "ContentType" NOT NULL DEFAULT 'button';
