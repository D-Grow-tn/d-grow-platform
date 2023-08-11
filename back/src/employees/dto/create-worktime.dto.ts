import { ApiProperty } from "@nestjs/swagger";
export class CreateWorktimeDto {
    @ApiProperty({ required: true })
    employeeId  : string;
    @ApiProperty({ required: true })
    date : Date;
    @ApiProperty({ required: true })
    totalWorkTime: number;
    @ApiProperty({ required: true })
    totalBreakTime: number;
   
}
