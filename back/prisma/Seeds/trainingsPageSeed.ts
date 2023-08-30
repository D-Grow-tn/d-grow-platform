import { ContentType, Prisma, PrismaClient } from '@prisma/client';
export const traningsPageSeed = async (prisma: PrismaClient, page: any) => {
  let traningsPageSection1 = await prisma.subComponent.create({
    data: {
      name: 'section1',
      mainId: page.id,
      position: 'section',
    },
  });

  var trainingPageSection1Content = [
    {
      name: 'image',
      type: 'image',
      path: `${process.env.API_CONFIG}upload/DSC_3719.jpg`,
    },]
    await Promise.all(
        trainingPageSection1Content.map(async (el) => {
          if (el.name === 'paragraph') {
            var data = {
              ...data,
              title: 'paragraph',
              type: el.type as ContentType,
              navigateTo: el.path,
            //   content: el.content,
              subComponentId: traningsPageSection1.id,
            };
          } else {
            var data = {
              ...data,
              title: 'image',
              type: el.type as ContentType,
              navigateTo: el.path,
              content: 'cover backgound',
              subComponentId: traningsPageSection1.id,
            };
          }
          if (el.type === 'image') {
            const media = await prisma.media.create({
              data: {
                path: el.path,
                extension: 'jpg',
                type: 'image',
              },
            });
            data['mediaId'] = media.id;
          }
          await prisma.contentSubComponent.create({
            data,
          });
        }),
      );

};
