import { ApiProperty } from "@nestjs/swagger";


export class CreateProductDto {
  @ApiProperty({ required: true })
  name:string;
  @ApiProperty({ required: true })
  type:string;
}
