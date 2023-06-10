import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class HelpersService {
  constructor(private readonly prisma: PrismaService) {}

  async notFound(model: string, findType: string, options: any) {
    try {
      return await this.prisma[model][findType](options);
    } catch (e) {
      if (e.code === 'P2025')
        throw new HttpException(model + ' not found', HttpStatus.BAD_REQUEST);
    }
  }
  async nestedCreateOrUpdateWithMedia(
    mediaIds: string[],
    data: any,
    subModel: string,
    action: string = 'create' || 'update',
    id: string,
    unique: string,
  ) {
    if (Array.isArray(mediaIds)) {
      let errors = [];
      await Promise.all(
        mediaIds.map(async (mediaId) => {
          try {
            await this.prisma.media.findFirstOrThrow({
              where: {
                id: mediaId,
              },
            });
          } catch (e) {
            errors.push(mediaId);
          }
        }),
      );

      if (errors.length) {
        let str = '';
        errors.forEach((error) => {
          str += 'mediaId :' + error + ' ';
        });
        throw new HttpException(str + 'not found', HttpStatus.BAD_REQUEST);
      }
      if (action === 'create') {
        data[subModel] = {
          create: mediaIds.map((id) => {
            return {
              mediaId: id,
            };
          }),
        };
      } else if (action === 'update') {
        data[subModel] = {
          connectOrCreate: mediaIds.map((mediaId) => {
            return {
              where: {
                [unique]: {
                  mediaId,
                  requestId: id,
                },
              },
              create: { mediaId },
            };
          }),
        };
      } else
        throw new HttpException(
          'action must be create or update',
          HttpStatus.BAD_REQUEST,
        );
    } else {
      throw new HttpException(
        'mediaIds must be an array',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
