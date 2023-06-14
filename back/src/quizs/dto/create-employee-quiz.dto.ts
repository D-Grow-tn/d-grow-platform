import { ApiProperty } from "@nestjs/swagger";

export class CreateEmployeeQuizDto {
    @ApiProperty({ required: true })
    employeeId : string;
    @ApiProperty({ required: true })
    quizId   :  string;
    @ApiProperty({ required: true })
    score    :  number;

}
