import { Test, TestingModule } from '@nestjs/testing';
import { WorkTimeController } from './work-time.controller';
import { WorkTimeService } from './work-time.service';

describe('WorkTimeController', () => {
  let controller: WorkTimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkTimeController],
      providers: [WorkTimeService],
    }).compile();

    controller = module.get<WorkTimeController>(WorkTimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
