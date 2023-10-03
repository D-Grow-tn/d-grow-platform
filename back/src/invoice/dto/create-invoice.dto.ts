import { CreateItemDto } from './../../item/dto/create-item.dto';
import { ApiProperty } from "@nestjs/swagger";

export class CreateInvoiceDto {
@ApiProperty({ required: false })
   total?:   string
@ApiProperty({ required: false })
  clientId?: string
   // @ApiProperty({ type: [CreateItemDto],required: false }) // Include items as an array of CreateItemDto
   // item?: CreateItemDto[];
   
}
