import { PartialType } from '@nestjs/swagger';
import { CreateWorktimeDto } from './create-worktime.dto';

export class UpdateWorktimeDto extends PartialType(CreateWorktimeDto) {}
