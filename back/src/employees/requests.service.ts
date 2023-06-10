import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { HelpersService } from '../helpers/helpers.service.js';

@Injectable()
export class RequestsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly helper: HelpersService,
  ) {}
  async create(createRequestDto: CreateRequestDto) {
    const { mediaIds, ...rest } = createRequestDto;
    let data = rest;
    await this.helper.notFound('employee', 'findFirstOrThrow', {
      where: { id: data.employeeId },
    });
    if (mediaIds) {
      await this.helper.nestedCreateOrUpdateWithMedia(
        mediaIds,
        data,
        'MediaRequest',
        'create',
        'id',
        'unique',
      );
    }
    return await this.prisma.request.create({
      data,
      include: {
        MediaRequest: { include: { media: true } },
      },
    });
  }

  async findAll() {
    return await this.prisma.request.findMany({
      include: {
        MediaRequest: {
          include: { media: true },
        },
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.request.findMany({
      where: {
        id,
      },
      include: {
        MediaRequest: true,
      },
    });
  }

  async update(id: string, dto: UpdateRequestDto) {
    const { mediaIds, ...rest } = dto;
    let data = { ...rest };
    await this.helper.notFound('employee', 'findFirstOrThrow', {
      where: { id: rest.employeeId },
    });
    if (mediaIds) {
      const request=  await this.findOne(id);
      
    await Promise.all(
      request.MediaRequest.forEach(async (elem) => {
          if (!mediaIds.includes(elem.mediaId)) {
    return await this.prisma.mediaRequest.delete({
              where: {
                requestMedia: { mediaId: elem.mediaId, requestId: id },
              },
            });
          }
        }),
      );
      await this.helper.nestedCreateOrUpdateWithMedia(
        mediaIds,
        data,
        'MediaRequest',
        'update',
        id,
        'requestMedia',
      );
    }
    return await this.prisma.request.update({
      where: { id },
      data,
      include: { MediaRequest: { include: { media: true } } },
    });
  }

  async remove(id: string) {
    return await this.prisma.$transaction(async (prisma) => {
      await prisma.mediaRequest.deleteMany({
        where: {
          mediaId: id,
        },
      });
      return await prisma.decision.delete({
        where: {
          id,
        },
      });
    });
  }
}
