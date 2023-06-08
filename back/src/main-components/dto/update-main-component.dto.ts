import { PartialType } from '@nestjs/swagger';
import { CreateMainComponentDto } from './create-main-component.dto';

export class UpdateMainComponentDto extends PartialType(CreateMainComponentDto) {}
