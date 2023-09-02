/*
  Warnings:

  - You are about to drop the column `question_id` on the `Option` table. All the data in the column will be lost.
  - You are about to drop the column `correctOptionId` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `quiz_id` on the `Question` table. All the data in the column will be lost.
  - Added the required column `correctOption` to the `Option` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Option" DROP CONSTRAINT "Option_question_id_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_quiz_id_fkey";

-- DropIndex
DROP INDEX "Option_question_id_idx";

-- DropIndex
DROP INDEX "Question_quiz_id_idx";

-- AlterTable
ALTER TABLE "Option" DROP COLUMN "question_id",
ADD COLUMN     "correctOption" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "correctOptionId",
DROP COLUMN "quiz_id";

-- CreateTable
CREATE TABLE "QuestionQuiz" (
    "questionId" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,
    "score" INTEGER NOT NULL
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
ALTER TABLE "QuestionQuiz" ADD CONSTRAINT "QuestionQuiz_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionQuestion" ADD CONSTRAINT "OptionQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionQuestion" ADD CONSTRAINT "OptionQuestion_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
