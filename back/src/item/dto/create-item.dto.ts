import { ApiProperty } from '@nestjs/swagger';
export class CreateItemDto {
 @ApiProperty()
   name: string
 @ApiProperty()
 description: string
 @ApiProperty()
  tax:string
 @ApiProperty()
 amount:string

}
