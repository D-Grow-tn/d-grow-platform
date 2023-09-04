import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionQuizsService } from './question-quizs.service';
import { CreateQuestionQuizDto } from './dto/create-question-quiz.dto';
import { UpdateQuestionQuizDto } from './dto/update-question-quiz.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('question-quizs')
@Controller('question-quizs')
export class QuestionQuizsController {
  constructor(private readonly questionQuizsService: QuestionQuizsService) {}

  @Post()
  create(@Body() createQuestionQuizDto: CreateQuestionQuizDto) {
    return this.questionQuizsService.create(createQuestionQuizDto);
  }

  @Get()
  findAll() {
    return this.questionQuizsService.findAll();
  }
  @Get('by-question/:questionId') 
  findAllByQuestion(@Param('questionId') questionId:string) {
    return this.questionQuizsService.findAllByQuestion(questionId);
  }
  @Get('one/:quizId/:questionId')
  findOne(@Param('quizId') @Param('questionId')quizId: string, questionId:string,) {
    return this.questionQuizsService.findOne(quizId,questionId);
  }

  @Patch(':quizId/questionId')
  update(@Param('quizId') @Param('questionId') quizId: string,questionId:string, @Body() updateQuestionQuizDto: UpdateQuestionQuizDto) {
    return this.questionQuizsService.update(quizId,questionId, updateQuestionQuizDto);
  }

  @Delete(':quizId/questionId')
  remove(@Param('quizId') @Param('questionId') quizId: string,questionId: string) {
    return this.questionQuizsService.remove(quizId,questionId,);
  }
}
