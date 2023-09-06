import { CreateItemDto } from './../../item/dto/create-item.dto';
import { ApiProperty } from "@nestjs/swagger";

export class CreateInvoiceDto {
@ApiProperty()
   total : string
   @ApiProperty({ type: [CreateItemDto] }) // Include items as an array of CreateItemDto
   item: CreateItemDto[];
   
}
