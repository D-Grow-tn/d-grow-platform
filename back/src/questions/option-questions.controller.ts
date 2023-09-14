import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OptionquestionsService } from './option-questions.service';
import { CreateOptionquestionDto } from './dto/create-optionquestion.dto';
import { UpdateOptionquestionDto } from './dto/update-optionquestion.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('optionquestions')
@Controller('optionquestions')
export class OptionquestionsController {
  constructor(private readonly optionquestionsService: OptionquestionsService) {}

  @Post()
  create(@Body() createOptionquestionDto: CreateOptionquestionDto) {
    return this.optionquestionsService.create(createOptionquestionDto);
  }

  @Get()
  findAll() {
    return this.optionquestionsService.findAll();
  }
  @Get('by-option/:optionId') 
  findAllByOption(@Param('optionId') optionId:string) {
    return this.optionquestionsService.findAllByOption(optionId);
  }

  @Get('one/:questionId/:optionId')
  findOne(@Param('questionId') @Param('optionId') questionId: string, optionId: string) {
    return this.optionquestionsService.findOne(questionId,optionId);
  }

  @Patch(':questionId/:optionId')
  update(@Param('questionId') @Param('optionId') questionId: string, optionId: string, @Body() updateOptionquestionDto: UpdateOptionquestionDto) {
    return this.optionquestionsService.update(questionId,optionId, updateOptionquestionDto);
  }

  @Delete(':questionId/:optionId')
  remove(@Param('questionId') @Param('optionId') questionId: string, optionId: string) {
    return this.optionquestionsService.remove(questionId,optionId);
  }
}
