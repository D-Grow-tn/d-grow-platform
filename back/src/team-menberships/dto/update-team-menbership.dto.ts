import { PartialType } from '@nestjs/swagger';
import { CreateTeamMenbershipDto } from './create-team-menbership.dto';

export class UpdateTeamMenbershipDto extends PartialType(CreateTeamMenbershipDto) {}
