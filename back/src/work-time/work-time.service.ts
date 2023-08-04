import { Injectable } from '@nestjs/common';
import { CreateWorkTimeDto } from './dto/create-work-time.dto';
import { UpdateWorkTimeDto } from './dto/update-work-time.dto';

@Injectable()
export class WorkTimeService {
  create(createWorkTimeDto: CreateWorkTimeDto) {
    return 'This action adds a new workTime';
  }

  findAll() {
    return `This action returns all workTime`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workTime`;
  }

  update(id: number, updateWorkTimeDto: UpdateWorkTimeDto) {
    return `This action updates a #${id} workTime`;
  }

  remove(id: number) {
    return `This action removes a #${id} workTime`;
  }
}
