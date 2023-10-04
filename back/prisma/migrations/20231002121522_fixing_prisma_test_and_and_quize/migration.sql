/*
  Warnings:

  - You are about to drop the column `correction` on the `Test` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Test" DROP COLUMN "correction";

-- CreateTable
CREATE TABLE "Questionn" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Questionn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionnTest" (
    "questionnId" TEXT NOT NULL,
    "testId" TEXT NOT NULL,
    "score" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "correctAnswer" BOOLEAN NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionnAnswer" (
    "answerId" TEXT NOT NULL,
    "questionnId" TEXT NOT NULL
);

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
    "correctionOption" BOOLEAN NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OptionQuestion" (
    "optionId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "QuestionnTest_questionnId_testId_key" ON "QuestionnTest"("questionnId", "testId");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionnAnswer_questionnId_answerId_key" ON "QuestionnAnswer"("questionnId", "answerId");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionQuiz_questionId_quizId_key" ON "QuestionQuiz"("questionId", "quizId");

-- CreateIndex
CREATE UNIQUE INDEX "OptionQuestion_optionId_questionId_key" ON "OptionQuestion"("optionId", "questionId");

-- AddForeignKey
ALTER TABLE "QuestionnTest" ADD CONSTRAINT "QuestionnTest_questionnId_fkey" FOREIGN KEY ("questionnId") REFERENCES "Questionn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionnTest" ADD CONSTRAINT "QuestionnTest_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionnAnswer" ADD CONSTRAINT "QuestionnAnswer_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionnAnswer" ADD CONSTRAINT "QuestionnAnswer_questionnId_fkey" FOREIGN KEY ("questionnId") REFERENCES "Questionn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionQuiz" ADD CONSTRAINT "QuestionQuiz_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionQuiz" ADD CONSTRAINT "QuestionQuiz_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionQuestion" ADD CONSTRAINT "OptionQuestion_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionQuestion" ADD CONSTRAINT "OptionQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
