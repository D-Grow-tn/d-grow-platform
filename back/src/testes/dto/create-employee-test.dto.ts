import { ApiProperty } from "@nestjs/swagger";

export class CreateEmployeeTestDto {
    @ApiProperty({required: true})
    employeeId: string;
    @ApiProperty({required: true})
    testId: string;
    @ApiProperty({required: true})
    score:number;
}
