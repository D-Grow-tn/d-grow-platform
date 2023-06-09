import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeQuizDto } from './create-employee-quiz.dto';

export class UpdateEmployeeQuizDto extends PartialType(CreateEmployeeQuizDto) {}
