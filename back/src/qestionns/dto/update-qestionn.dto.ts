import { PartialType } from '@nestjs/swagger';
import { CreateQestionnDto } from './create-qestionn.dto';

export class UpdateQestionnDto extends PartialType(CreateQestionnDto) {}
