import { PrismaClient } from "@prisma/client";

export const websiteSettingsSeed = async (prisma:PrismaClient) => {
  //create web setting  seed
  let footer = await prisma.mainComponent.create({
    data: {
      title: 'Footer',
      path: '/footer',
      type: 'footer',
    },
  });

  let header = await prisma.mainComponent.create({
    data: {
      title: 'Header',
      path: '/header',
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

  //create subComponent sidebar

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

  let shomePageSection4 = await prisma.subComponent.create({
    data: {
      name: 'section4',
      mainId: homePage.id,
      position: 'section',
    },
  });

  //create content sub component Left Header

  let contentSubComponents1 = await prisma.contentSubComponent.create({
    data: {
      title: 'paragraph',
      navigateTo: '',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about-as' },
    { name: 'About us', path: '/contact-us' },
    { name: 'Services', path: '/services' },
  ];
  for (let i = 0; i < contents.length; i++) {
    prisma.contentSubComponent.create({
      data: {
        title: 'button',
        navigateTo: contents[i].path,
        content: contents[i].name,
        subComponentId: headerMiddle.id,
      },
    });
  }
};
