import { ApiProperty } from "@nestjs/swagger";

export class CreateClientDto {
  @ApiProperty({ required: true })
  name: string;
  @ApiProperty({ required: true })
  email: string;
  @ApiProperty({ required: true })
  phone: string;
  @ApiProperty({ required: true })
  address: string;
  @ApiProperty({ required: true })
  avatarClientId: string;
}
