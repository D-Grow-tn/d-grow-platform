import { PartialType } from '@nestjs/swagger';
import { CreateAnswerQuestionnDto } from './create-answer-questionn.dto';

export class UpdateAnswerQuestionnDto extends PartialType(CreateAnswerQuestionnDto) {}
