import { ApiProperty } from "@nestjs/swagger";

export class CreateProjectTechnologyDto {
    @ApiProperty({ required: true })
    projectId : string;
    @ApiProperty({ required: true })
    technologyId : string;
}
