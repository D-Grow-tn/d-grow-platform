import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionnTestsService } from './questionn-tests.service';
import { CreateQuestionnTestDto } from './dto/create-questionn-test.dto';
import { UpdateQuestionnTestDto } from './dto/update-questionn-test.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('questionn-tests')
@Controller('questionn-tests')
export class QuestionnTestsController {
  constructor(private readonly questionnTestsService: QuestionnTestsService) {}

  @Post()
  create(@Body() createQuestionnTestDto: CreateQuestionnTestDto) {
    return this.questionnTestsService.create(createQuestionnTestDto);
  }

  @Get()
  findAll() {
    return this.questionnTestsService.findAll();
  }

  @Get('by-questionn/:questionnId') 
  findAllByQuestionn(@Param('questionnId') questionnId:string) {
    return this.questionnTestsService.findAllByQuestionn(questionnId);
  }
  @Get('one/:testId/:questionnId')
  findOne(@Param('testId') @Param('questionnId')testId: string, questionnId:string,) {
    return this.questionnTestsService.findOne(testId,questionnId);
  }

  @Patch(':testId/:questionnId')
  update(@Param('testid') @Param('questionnId') testId: string,questionnId:string, @Body() updateQuestionnTestDto: UpdateQuestionnTestDto) {
    return this.questionnTestsService.update(testId,questionnId, updateQuestionnTestDto);
  }

  @Delete(':testId/:questionnId')
  remove(@Param('testid') @Param('questionnId') testId: string,questionnId:string, ) {
    return this.questionnTestsService.remove(testId,questionnId,);
  }
}
