import { Test, TestingModule } from '@nestjs/testing';
import { ProvidesController } from './provides.controller';
import { ProvidesService } from './provides.service';

describe('ProvidesController', () => {
  let controller: ProvidesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProvidesController],
      providers: [ProvidesService],
    }).compile();

    controller = module.get<ProvidesController>(ProvidesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
