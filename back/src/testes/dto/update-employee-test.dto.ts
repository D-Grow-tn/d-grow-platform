import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeTestDto } from './create-employee-test.dto';

export class UpdateEmployeeTestDto extends PartialType(CreateEmployeeTestDto) {}
