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
    "CorrectAnswer" BOOLEAN NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnswerQuestionn" (
    "answerId" TEXT NOT NULL,
    "questionnId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "QuestionnTest_questionnId_testId_key" ON "QuestionnTest"("questionnId", "testId");

-- CreateIndex
CREATE UNIQUE INDEX "AnswerQuestionn_answerId_questionnId_key" ON "AnswerQuestionn"("answerId", "questionnId");

-- AddForeignKey
ALTER TABLE "QuestionnTest" ADD CONSTRAINT "QuestionnTest_questionnId_fkey" FOREIGN KEY ("questionnId") REFERENCES "Questionn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionnTest" ADD CONSTRAINT "QuestionnTest_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerQuestionn" ADD CONSTRAINT "AnswerQuestionn_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerQuestionn" ADD CONSTRAINT "AnswerQuestionn_questionnId_fkey" FOREIGN KEY ("questionnId") REFERENCES "Questionn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
