import { PartialType } from '@nestjs/swagger';
import { CreateSubComponentDto } from './create-sub-component.dto';

export class UpdateSubComponentDto extends PartialType(CreateSubComponentDto) {}
