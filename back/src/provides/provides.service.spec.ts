import { Test, TestingModule } from '@nestjs/testing';
import { ProvidesService } from './provides.service';

describe('ProvidesService', () => {
  let service: ProvidesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProvidesService],
    }).compile();

    service = module.get<ProvidesService>(ProvidesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
