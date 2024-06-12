import { ApiProperty } from "@nestjs/swagger";

export class CreateQestionnDto {
    @ApiProperty({ required: true })
    text : string
    @ApiProperty()
    QuestionnAnswerIds : string []
}
