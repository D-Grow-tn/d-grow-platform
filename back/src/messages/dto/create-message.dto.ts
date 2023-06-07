import { ApiProperty } from "@nestjs/swagger";

export class CreateMessageDto {
    @ApiProperty({ required: true })
    content   : string;
    @ApiProperty({ required: true })
    employeeId : string;
    @ApiProperty({ required: true })
    chatRoomId : string;
}
