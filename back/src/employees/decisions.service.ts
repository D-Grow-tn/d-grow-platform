import { Injectable } from '@nestjs/common';
import { CreateDecisionDto } from './dto/create-decision.dto';
import { UpdateDecisionDto } from './dto/update-decision.dto';

@Injectable()
export class DecisionsService {
  create(createDecisionDto: CreateDecisionDto) {
    return 'This action adds a new decision';
  }

  findAll() {
    return `This action returns all decisions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} decision`;
  }

  update(id: number, updateDecisionDto: UpdateDecisionDto) {
    return `This action updates a #${id} decision`;
  }

  remove(id: number) {
    return `This action removes a #${id} decision`;
  }
}
