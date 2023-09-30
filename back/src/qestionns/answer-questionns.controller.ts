import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnswerQuestionnsService } from './answer-questionns.service';
import { CreateAnswerQuestionnDto } from './dto/create-answer-questionn.dto';
import { UpdateAnswerQuestionnDto } from './dto/update-answer-questionn.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('answer-questionns')
@Controller('answer-questionns')
export class AnswerQuestionnsController {
  constructor(private readonly answerQuestionnsService: AnswerQuestionnsService) {}

  @Post()
  create(@Body() createAnswerQuestionnDto: CreateAnswerQuestionnDto) {
    return this.answerQuestionnsService.create(createAnswerQuestionnDto);
  }

  @Get()
  findAll() {
    return this.answerQuestionnsService.findAll();
  }


@Get('by-answer/:answerId') 
findAllByAnswer(@Param('answerId') answerId:string) {
  return this.answerQuestionnsService.findAllByAnswer(answerId)
}

  @Get('one/:questionnId/:answerId')
  findOne(@Param('questionnId') @Param('answerId') questionnId: string, answerId:string) {
    return this.answerQuestionnsService.findOne(questionnId,answerId);
  }

  @Patch(':questionnId/:answerId')
  update(@Param('questionnId') @Param('answerId') questionnId: string, answerId:string, @Body() updateAnswerQuestionnDto: UpdateAnswerQuestionnDto) {
    return this.answerQuestionnsService.update(questionnId,answerId, updateAnswerQuestionnDto);
  }

  @Delete(':questionnId/:answerId')
  remove(@Param('questionnId') @Param('answerId') questionnId: string, answerId:string) {
    return this.answerQuestionnsService.remove(questionnId,answerId);
  }
}
