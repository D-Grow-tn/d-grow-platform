import { PartialType } from '@nestjs/mapped-types';
import { CreateDecisionDto } from './create-decision.dto';

export class UpdateDecisionDto extends PartialType(CreateDecisionDto) {}
