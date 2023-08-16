import { PartialType } from '@nestjs/swagger';
import { CreateDeviDto } from './create-devi.dto';

export class UpdateDeviDto extends PartialType(CreateDeviDto) {}
