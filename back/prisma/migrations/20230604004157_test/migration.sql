-- CreateTable
CREATE TABLE "Rania" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Rania_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ines" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Ines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_InesToRania" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_InesToRania_AB_unique" ON "_InesToRania"("A", "B");

-- CreateIndex
CREATE INDEX "_InesToRania_B_index" ON "_InesToRania"("B");

-- AddForeignKey
ALTER TABLE "_InesToRania" ADD CONSTRAINT "_InesToRania_A_fkey" FOREIGN KEY ("A") REFERENCES "Ines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InesToRania" ADD CONSTRAINT "_InesToRania_B_fkey" FOREIGN KEY ("B") REFERENCES "Rania"("id") ON DELETE CASCADE ON UPDATE CASCADE;
