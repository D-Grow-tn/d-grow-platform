import { ContentType, Prisma, PrismaClient } from '@prisma/client';

export const websiteSettingsSeed = async (prisma: PrismaClient) => {
  //create web setting  seed
  let footer = await prisma.mainComponent.create({
    data: {
      title: 'Footer',

      type: 'footer',
    },
  });

  let header = await prisma.mainComponent.create({
    data: {
      title: 'Header',

      type: 'header',
    },
  });

  let homePage = await prisma.mainComponent.create({
    data: {
      title: 'HomePage',
      path: '/',
      type: 'page',
    },
  });
  let aboutPage = await prisma.mainComponent.create({
    data: {
      title: 'AboutPage',
      path: '/about',
      type: 'page',
    },
  });
  let contactPage = await prisma.mainComponent.create({
    data: {
      title: 'ContactPage',
      path: '/contact',
      type: 'page',
    },
  });
  let servicesPage = await prisma.mainComponent.create({
    data: {
      title: 'ServicesPage',
      path: '/services',
      type: 'page',
    },
  });
  //create subcomponent header
  let headerLeft = await prisma.subComponent.create({
    data: {
      name: 'headerLeft',
      mainId: header.id,
      position: 'left',
    },
  });

  let headerRight = await prisma.subComponent.create({
    data: {
      name: 'headerRight',
      mainId: header.id,
      position: 'right',
    },
  });

  let headerMiddle = await prisma.subComponent.create({
    data: {
      name: 'headerMiddle',
      mainId: header.id,
      position: 'middle',
    },
  });

  //create subComponent page
  let homePageSection1 = await prisma.subComponent.create({
    data: {
      name: 'section1',
      mainId: homePage.id,
      position: 'section',
    },
  });

  let homePageSection2 = await prisma.subComponent.create({
    data: {
      name: 'section2',
      mainId: homePage.id,
      position: 'section',
    },
  });

  let homePageSection3 = await prisma.subComponent.create({
    data: {
      name: 'section3',
      mainId: homePage.id,
      position: 'section',
    },
  });

  let homePageSection4 = await prisma.subComponent.create({
    data: {
      name: 'section4',
      mainId: homePage.id,
      position: 'section',
    },
  });
  let homePageSection5 = await prisma.subComponent.create({
    data: {
      name: 'section5',
      mainId: homePage.id,
      position: 'section',
    },
  });
  let homePageSection6 = await prisma.subComponent.create({
    data: {
      name: 'section6',
      mainId: homePage.id,
      position: 'section',
    },
  });

  //create content sub component Left Header

  let HeaderLeftContent = await prisma.contentSubComponent.create({
    data: {
      title: 'logo',
      navigateTo: '/',
      content: 'D-grow',
      subComponentId: headerLeft.id,
    },
  });
  //create content sub component Right Header
  let headerRightContent = await prisma.contentSubComponent.create({
    data: {
      title: 'image',
      navigateTo: '',
      content: '/',
      subComponentId: headerRight.id,
    },
  });
  //create content sub component Middle Header
  let contents = [
    { name: 'Home', path: '/', type: 'button' },
    { name: 'About', path: '/about-as', type: 'button' },
    { name: 'Contact', path: '/contact', type: 'button' },
    {
      type: 'select',
      name: 'Services',
      path: '/services',
      subContent: [
        { path: '/', item: 'Website applications' },
        { path: '/', item: 'Mobile applications' },
        { path: '/', item: 'Something else' },
      ],
    },
  ];
  await Promise.all(
    contents.map(async elem=>{
        let data = {
            title: 'button',
            type: elem.type as ContentType,
            navigateTo: elem.path,
            content: elem.name,
            subComponentId: headerMiddle.id,
           
        };
        if (elem.type === 'select') {
          data['subContent']=elem.subContent as Prisma.JsonArray
        }
        await prisma.contentSubComponent.create({
          data
        });
    })
  )
  
};
