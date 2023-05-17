import { PartialType } from '@nestjs/mapped-types';
import { CreateStageDto } from './create-stage.dto';

export class UpdateStageDto extends PartialType(CreateStageDto) {}
