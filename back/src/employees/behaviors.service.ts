import { Injectable } from '@nestjs/common';
import { CreateBehaviorDto } from './dto/create-behavior.dto';
import { UpdateBehaviorDto } from './dto/update-behavior.dto';

@Injectable()
export class BehaviorsService {
  create(createBehaviorDto: CreateBehaviorDto) {
    return 'This action adds a new behavior';
  }

  findAll() {
    return `This action returns all behaviors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} behavior`;
  }

  update(id: number, updateBehaviorDto: UpdateBehaviorDto) {
    return `This action updates a #${id} behavior`;
  }

  remove(id: number) {
    return `This action removes a #${id} behavior`;
  }
}
