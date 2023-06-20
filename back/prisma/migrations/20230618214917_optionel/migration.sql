-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_avatarClientId_fkey";

-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "avatarClientId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_avatarClientId_fkey" FOREIGN KEY ("avatarClientId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
