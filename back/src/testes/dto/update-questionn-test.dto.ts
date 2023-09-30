import { PartialType } from '@nestjs/swagger';
import { CreateQuestionnTestDto } from './create-questionn-test.dto';

export class UpdateQuestionnTestDto extends PartialType(CreateQuestionnTestDto) {}
