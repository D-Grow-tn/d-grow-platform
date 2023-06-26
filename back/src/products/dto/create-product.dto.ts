import { ApiProperty } from "@nestjs/swagger";


export class CreateProductDto {
  @ApiProperty({ required: true })
  name:string;
  @ApiProperty({ required: true })
  description:string;
  @ApiProperty({ required: true })
  type:string;
  @ApiProperty({ required: false })
  productCoverId: string;
}
