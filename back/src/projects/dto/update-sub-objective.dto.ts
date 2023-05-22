import { PartialType } from '@nestjs/swagger';
import { CreateSubObjectiveDto } from './create-sub-objective.dto';

export class UpdateSubObjectiveDto extends PartialType(CreateSubObjectiveDto) {}
