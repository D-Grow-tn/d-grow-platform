/*
  Warnings:

  - The required column `id` was added to the `EmployeeQuiz` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "EmployeeQuiz" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "EmployeeQuiz_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "correctOptionId" TEXT,
    "quiz_id" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Question_quiz_id_idx" ON "Question"("quiz_id");

-- CreateIndex
CREATE INDEX "Option_question_id_idx" ON "Option"("question_id");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
