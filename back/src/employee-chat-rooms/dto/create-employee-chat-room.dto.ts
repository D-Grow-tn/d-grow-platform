import { ApiProperty } from "@nestjs/swagger";

export class CreateEmployeeChatRoomDto {
    @ApiProperty({ required: true })
    employeeId : string;
    @ApiProperty({ required: true })
    chatRoomId : string
}
