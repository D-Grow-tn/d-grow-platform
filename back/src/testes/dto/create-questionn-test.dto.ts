import { ApiProperty } from "@nestjs/swagger";

export class CreateQuestionnTestDto {
    @ApiProperty({required :true})
    questionnId: string;
    @ApiProperty({required:true})
    testId : string
    @ApiProperty({required:true})
    score:number

}
