-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "avatarClientId" TEXT;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_avatarClientId_fkey" FOREIGN KEY ("avatarClientId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
