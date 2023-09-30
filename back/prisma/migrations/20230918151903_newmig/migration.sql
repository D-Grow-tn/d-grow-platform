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

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionQuiz" (
    "questionId" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,
    "score" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Option" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "correctOption" BOOLEAN NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OptionQuestion" (
    "questionId" TEXT NOT NULL,
    "optionId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "QuestionQuiz_questionId_quizId_key" ON "QuestionQuiz"("questionId", "quizId");

-- CreateIndex
CREATE UNIQUE INDEX "OptionQuestion_questionId_optionId_key" ON "OptionQuestion"("questionId", "optionId");

-- AddForeignKey
ALTER TABLE "QuestionQuiz" ADD CONSTRAINT "QuestionQuiz_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionQuiz" ADD CONSTRAINT "QuestionQuiz_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionQuestion" ADD CONSTRAINT "OptionQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionQuestion" ADD CONSTRAINT "OptionQuestion_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
