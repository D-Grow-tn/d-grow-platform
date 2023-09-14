import { PartialType } from '@nestjs/swagger';
import { CreateQuestionQuizDto } from './create-question-quiz.dto';

export class UpdateQuestionQuizDto extends PartialType(CreateQuestionQuizDto) {}
