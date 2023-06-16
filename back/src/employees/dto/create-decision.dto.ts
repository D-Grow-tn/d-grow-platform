import { ApiProperty } from "@nestjs/swagger";
export class CreateDecisionDto {
    @ApiProperty()
    content :string ;
    @ApiProperty()
    decisionApplyIds: string[];
}