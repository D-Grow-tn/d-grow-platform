import { PartialType } from '@nestjs/swagger';
import { CreateParagraphDto } from './create-paragraph.dto';

export class UpdateParagraphDto extends PartialType(CreateParagraphDto) {}
