import { PartialType } from '@nestjs/swagger';
import { CreateProjectTechnologyDto } from './create-project-technology.dto';

export class UpdateProjectTechnologyDto extends PartialType(CreateProjectTechnologyDto) {}
