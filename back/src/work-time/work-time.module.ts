import { Module } from '@nestjs/common';
import { WorkTimeService } from './work-time.service';
import { WorkTimeController } from './work-time.controller';

@Module({
  controllers: [WorkTimeController],
  providers: [WorkTimeService]
})
export class WorkTimeModule {}
