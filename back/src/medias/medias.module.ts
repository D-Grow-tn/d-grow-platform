import { Module } from '@nestjs/common';
import { MediasService } from './medias.service';
import { MediasController } from './medias.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MediasController],
  providers: [MediasService,PrismaService],
  imports:[PrismaModule]
})
export class MediasModule {}
