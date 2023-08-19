import { PartialType } from '@nestjs/swagger';
import { CreateProvideDto } from './create-provide.dto';

export class UpdateProvideDto extends PartialType(CreateProvideDto) {}
