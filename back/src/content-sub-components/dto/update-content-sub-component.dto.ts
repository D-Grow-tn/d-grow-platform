import { PartialType } from '@nestjs/swagger';
import { CreateContentSubComponentDto } from './create-content-sub-component.dto';

export class UpdateContentSubComponentDto extends PartialType(CreateContentSubComponentDto) {}
