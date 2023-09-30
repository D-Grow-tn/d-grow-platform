import { PartialType } from '@nestjs/swagger';
import { CreateTestisDto } from './create-testis.dto';

export class UpdateTestisDto extends PartialType(CreateTestisDto) {}
