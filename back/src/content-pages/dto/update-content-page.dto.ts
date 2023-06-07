import { PartialType } from '@nestjs/swagger';
import { CreateContentPageDto } from './create-content-page.dto';

export class UpdateContentPageDto extends PartialType(CreateContentPageDto) {}
