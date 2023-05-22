import { PartialType } from '@nestjs/mapped-types';
import { CreateProducttypeDto } from './create-producttype.dto';

export class UpdateProducttypeDto extends PartialType(CreateProducttypeDto) {}
