import { PartialType } from '@nestjs/swagger';
import { CreateOptionquestionDto } from './create-optionquestion.dto';

export class UpdateOptionquestionDto extends PartialType(CreateOptionquestionDto) {}
