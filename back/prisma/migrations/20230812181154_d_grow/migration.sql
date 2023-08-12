-- CreateTable
CREATE TABLE "Devis" (
    "id" TEXT NOT NULL,
    "devisNumber" SERIAL NOT NULL,
    "price" TEXT NOT NULL,
    "discreption" TEXT NOT NULL,

    CONSTRAINT "Devis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientDevis" (
    "clientId" TEXT NOT NULL,
    "devisId" TEXT NOT NULL,

    CONSTRAINT "ClientDevis_pkey" PRIMARY KEY ("clientId","devisId")
);

-- CreateTable
CREATE TABLE "_ClientToDevis" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToDevis_AB_unique" ON "_ClientToDevis"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToDevis_B_index" ON "_ClientToDevis"("B");

-- AddForeignKey
ALTER TABLE "ClientDevis" ADD CONSTRAINT "ClientDevis_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientDevis" ADD CONSTRAINT "ClientDevis_devisId_fkey" FOREIGN KEY ("devisId") REFERENCES "Devis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToDevis" ADD CONSTRAINT "_ClientToDevis_A_fkey" FOREIGN KEY ("A") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToDevis" ADD CONSTRAINT "_ClientToDevis_B_fkey" FOREIGN KEY ("B") REFERENCES "Devis"("id") ON DELETE CASCADE ON UPDATE CASCADE;
