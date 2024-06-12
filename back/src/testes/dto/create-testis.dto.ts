import { ApiProperty } from "@nestjs/swagger";

export class CreateTestisDto {
    @ApiProperty({ required: true })
    title: string;
    @ApiProperty({ required: true })
    content: string;
    @ApiProperty({ required: true })
    score: number
    @ApiProperty()
    QuestionnTestIds :string[]
    @ApiProperty()
    EmployeeTestIds: string[]
}
