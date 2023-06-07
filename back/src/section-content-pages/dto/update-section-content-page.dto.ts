import { PartialType } from '@nestjs/swagger';
import { CreateSectionContentPageDto } from './create-section-content-page.dto';

export class UpdateSectionContentPageDto extends PartialType(CreateSectionContentPageDto) {}
