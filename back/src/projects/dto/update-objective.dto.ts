import { PartialType } from '@nestjs/swagger';
import { CreateObjectiveDto } from './create-objective.dto';

export class UpdateObjectiveDto extends PartialType(CreateObjectiveDto) {}
