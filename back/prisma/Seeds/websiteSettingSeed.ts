import { ContentType, Prisma, PrismaClient } from '@prisma/client';
import { CreateContentSubComponentDto } from 'src/content-sub-components/dto/create-content-sub-component.dto';
import { ContentSubComponent } from 'src/content-sub-components/entities/content-sub-component.entity';
// import images from "../../src/assets/img/images";

// const { jalyss1, jalyss2, jalyss3, jalyss4, jalyss5 } = images;
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
      path: '/about-us',
      type: 'page',
    },
  });

  let commingSoonPage = await prisma.mainComponent.create({
    data: {
      title: 'CommingSoonPage',
      path: '/coming',
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

  //create subComponent commingSoonPage
  let commingSoonPageSection1 = await prisma.subComponent.create({
    data: {
      name: 'section1',
      mainId: commingSoonPage.id,
      position: 'section',
    },
  });
  let commingSoonPageSection2 = await prisma.subComponent.create({
    data: {
      name: 'section2',
      mainId: commingSoonPage.id,
      position: 'section',
    },
  });

  let commingSoonPageSection3 = await prisma.subComponent.create({
    data: {
      name: 'section3',
      mainId: commingSoonPage.id,
      position: 'section',
    },
  });
  //create subComponent homepage
  let homePageSection1 = await prisma.subComponent.create({
    data: {
      name: 'section1',
      mainId: homePage.id,
      position: 'section',
      // ContentSubComponent: {
      //   create: [
      //     {
      //       title: 'background',
      //       media: {
      //         create: {
      //           path: 'https://i.pinimg.com/564x/f1/2a/22/f12a222abac962182c5c0b9999a88fa2.jpg',
      //           type: 'image',
      //           extension: 'jpg',
      //         },
      //       },

      //       type: 'image' as ContentType,
      //       content: 'cover backgound',
      //     },
      //   ],
      // },
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
  // create content subComponent homePageSection1
  var content = [
    {
      name: 'image',
      type: 'image',
      path: 'https://i.pinimg.com/564x/f1/2a/22/f12a222abac962182c5c0b9999a88fa2.jpg',
    },
    {
      name: 'paragraph',
      path: '',
      type: 'paragraph',
      content: '1',
      nexts: [
        {
          name: 'paragraph',
          path: '',
          type: 'paragraph',
          content:
            ' Unleash your potential with our empowering digital services !',
        },
      ],
    },
    {
      name: 'paragraph',
      path: '',
      type: 'paragraph',
      content: '2',
      nexts: [
        {
          name: 'paragraph',
          path: '',
          type: 'paragraph',
          content:
            'Ignite your success with captivating websites and apps that engage and convert!',
        },
      ],
    },
    {
      name: 'paragraph',
      path: '',
      type: 'paragraph',
      content: '3',
      nexts: [
        {
          name: 'paragraph',
          path: '',
          type: 'paragraph',
          content:
            ' Streamline operations and boost productivity with our custom digital solutions!',
        },
      ],
    },
    {
      name: 'paragraph',
      path: '',
      type: 'paragraph',
      content: '4',
      nexts: [
        {
          name: 'paragraph',
          path: '',
          type: 'paragraph',
          content:
            'Propel your business forward with tailored strategies that drive growth!',
        },
      ],
    },
    {
      name: 'paragraph',
      path: '',
      type: 'paragraph',
      content: '5',
      nexts: [
        {
          name: 'paragraph',
          path: '',
          type: 'paragraph',
          content:
            'Reach customers on the go with mobile-optimized experiences that drive engagement.',
        },
      ],
    },
    {
      name: 'paragraph',
      path: '',
      type: 'paragraph',
      content: '6',
      nexts: [
        {
          name: 'paragraph',
          path: '',
          type: 'paragraph',
          content:
            ' Stand out and make a lasting impression with our visually stunning digital solutions.',
        },
      ],
    },
    {
      name: 'paragraph',
      path: '',
      type: 'paragraph',
      content: '7',
      nexts: [
        {
          name: 'paragraph',
          path: '',
          type: 'paragraph',
          content:
            '  Experience the added value of our solutions and elevate your business to new heights.',
        },
      ],
    },
    {
      name: 'paragraph',
      path: '',
      type: 'paragraph',
      content: '8',
      nexts: [
        {
          name: 'paragraph',
          path: '',
          type: 'paragraph',
          content:
            ' Delight your customers with seamless and intuitive experiences that prioritize their needs!',
        },
      ],
    },
    {
      name: 'paragraph',
      path: '',
      type: 'paragraph',
      content: '9',
      nexts: [
        {
          name: 'paragraph',
          path: '',
          type: 'paragraph',
          content:
            '  Stay ahead of the curve with cutting-edge technologies that future-proof your business!',
        },
      ],
    },
  ];
  await Promise.all(
    content.map(async (el) => {
      if (el.name === 'paragraph') {
        var data = {
          ...data,
          title: 'paragraph',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: el.content,
          subComponentId: homePageSection1.id,
        };
      } else {
        var data = {
          ...data,
          title: 'image',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: 'cover backgound',
          subComponentId: homePageSection1.id,
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
  //create content sub component homePageSection2

  var content1 = [
    { name: 'title', path: '', type: 'paragraph', content: 'Unleash Your' },

    { name: 'title', path: '', type: 'paragraph', content: 'Digital' },
    { name: 'title', path: '', type: 'paragraph', content: 'Potential' },
    {
      name: 'paragraph',
      path: '',
      type: 'paragraph',
      content:
        'Transforming Businesses with Exquisite Websites and Powerful Mobile Applications ',
    },
    {
      name: 'paragraph',
      path: '',
      type: 'paragraph',
      content:
        'we pride ourselves on delivering high-quality solutions that combine cutting-edge technology, aesthetic design, and user-centric functionality.',
    },
    {
      name: 'image',
      type: 'image',
      path: `${process.env.API_CONFIG}upload/plan.json`,
    },
    { name: 'Read more', path: '/about-us', type: 'button' },
  ];

  await Promise.all(
    content1.map(async (el) => {
      if (el.name === 'title') {
        var data = {
          title: 'title',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: el.content,
          subComponentId: homePageSection2.id,
        };
      } else if (el.name === 'paragraph') {
        var data = {
          ...data,
          title: 'paragraph',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: el.content,
          subComponentId: homePageSection2.id,
        };
      } else if (el.name === 'image') {
        var data = {
          title: 'image',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: el.content,
          subComponentId: homePageSection2.id,
        };
      } else {
        var data = {
          title: 'button',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: 'Read more',
          subComponentId: homePageSection2.id,
        };
      }
      if (el.type === 'image') {
        const media = await prisma.media.create({
          data: {
            path: el.path,
            extension: 'json',
            type: 'json',
          },
        });
        data['mediaId'] = media.id;
      }

      await prisma.contentSubComponent.create({
        data,
      });
    }),
  );
  //create content sub component homePageSection3

  let content3 = [
    { name: 'title', path: '', type: 'paragraph', content: 'Clients Reviews' },
    {
      name: 'paragraph',
      path: '',
      type: 'paragraph',
      content:
        ' Since having our new website built by Sfectoria, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. Matt and his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized and effective. Thanks to Sfectoria for all of your hard work and support! ',
      nexts: [
        {
          name: 'paragraph',
          path: '',
          type: 'paragraph',
          content: 'Ahmed',
        },
        {
          name: 'image',
          path: '',
          type: 'image',
          content: 'Ahmed',
        },
      ],
    },
    {
      name: 'paragraph',
      path: '',
      type: 'paragraph',
      content:
        'It is a distinct pleasure for me to recommend Sfectoria to any and  all interested parties. They have been professional,  comprehensive and competent throughout the process of our  working together. We feel that we have established a  relationship with them for years to come. The reaction to our  new web site has been overwhelmingly positive.',
      nexts: [
        {
          name: 'paragraph',
          path: '',
          type: 'paragraph',
          content: 'Ghada',
        },
        {
          name: 'image',
          path: '',
          type: 'image',
          content: 'Ghada',
        },
      ],
    },

    {
      name: 'paragraph',
      path: '',
      type: 'paragraph',
      content:
        'Compared to the other companies we have used in the past,D-Grow has been far and above the best in every area. Whilebuilding our new web site, the customer service has been prompt and straightforward and the actual services are well documented and logical to our needs. ',
      nexts: [
        {
          name: 'paragraph',
          path: '',
          type: 'paragraph',
          content: 'Khalil',
        },
        {
          name: 'image',
          path: '',
          type: 'image',
          content: 'Khalil',
        },
      ],
    },
  ];

  await Promise.all(
    content3.map(async (el) => {
      let data = {
        title: 'title',
        type: el.type as ContentType,
        navigateTo: el.path,
        content: 'Clients Reviews',
        subComponentId: homePageSection3.id,
      };
      if (el.name === 'title') {
        data = {
          ...data,
          title: 'title',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: 'Clients Reviews',
          subComponentId: homePageSection3.id,
        };
      } else if (el.name === 'paragraph') {
        data = {
          ...data,
          title: 'paragraph',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: el.content,
          subComponentId: homePageSection3.id,
        };
      } else {
        data = {
          ...data,
          title: 'image',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: '',
          subComponentId: homePageSection3.id,
        };
      }
      if (el?.nexts)
        data['nexts'] = {
          create: el.nexts.map((elem) => ({
            title: elem.name,
            type: elem.type as ContentType,
            navigateTo: elem.path,
            content: elem.content,
            subComponentId: homePageSection3.id,
          })),
        };
      await prisma.contentSubComponent.create({
        data,
      });
    }),
  );

  //create content sub component homePageSection4

  let content4 = [
    { name: 'title', path: '', type: 'paragraph' },
    { name: 'paragraph', path: '', type: 'paragraph' },
    { name: 'image', path: '', type: 'image' },
    { name: 'See more', path: '/services', type: 'button' },
  ];

  await Promise.all(
    content4.map(async (el) => {
      if (el.name === 'title') {
        var data = {
          title: 'title',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: 'Our Services',
          subComponentId: homePageSection4.id,
        };
      } else if (el.name === 'paragraph') {
        var data = {
          title: 'paragraph',
          type: el.type as ContentType,
          navigateTo: el.path,
          content:
            ' We offer comprehensive services to help businesses establish a strong online presence and drive their success in the digital realm.',
          subComponentId: homePageSection4.id,
        };
      } else if (el.name === 'image') {
        var data = {
          title: 'image',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: '',
          subComponentId: homePageSection4.id,
        };
      } else {
        var data = {
          title: 'button',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: 'See more',
          subComponentId: homePageSection4.id,
        };
      }
      await prisma.contentSubComponent.create({
        data,
      });
    }),
  );

  //create content sub component homePageSection4

  let content5 = [
    { name: 'title', path: '', type: 'paragraph', content: 'Elevate your' },
    { name: 'title', path: '', type: 'paragraph', content: 'Digital' },
    { name: 'title', path: '', type: 'paragraph', content: 'Presence' },
    { name: 'paragraph', path: '', type: 'paragraph' },
    {
      name: 'image',
      path: `${process.env.API_CONFIG}upload/dev.json`,
      type: 'image',
    },
    { name: 'Contact-Us', path: '/contact', type: 'button' },
  ];

  await Promise.all(
    content5.map(async (el) => {
      if (el.name === 'title') {
        var data = {
          title: 'title',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: el.content,
          subComponentId: homePageSection5.id,
        };
      } else if (el.name === 'paragraph') {
        var data = {
          title: 'paragraph',
          type: el.type as ContentType,
          navigateTo: el.path,
          content:
            'Contact us today to unlock the full potential of your business with our expert web and mobile development services.',
          subComponentId: homePageSection5.id,
        };
      } else if (el.name === 'image') {
        var data = {
          title: 'image',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: '',
          subComponentId: homePageSection5.id,
        };
      } else {
        var data = {
          title: 'button',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: 'Contact-Us',
          subComponentId: homePageSection5.id,
        };
      }
      if (el.type === 'image') {
        const media = await prisma.media.create({
          data: {
            path: el.path,
            extension: 'json',
            type: 'json',
          },
        });
        data['mediaId'] = media.id;
      }

      await prisma.contentSubComponent.create({
        data,
      });
    }),
  );
  //create content sub component homePageSection6
  let content6 = [
    {
      name: 'title',
      path: '',
      type: 'paragraph',
      content: 'We have established strong',
    },
    { name: 'title', path: '', type: 'paragraph', content: ' Partnerships' },
    {
      name: 'title',
      path: '',
      type: 'paragraph',
      content: ' with renowned global brands, earning their trust.',
    },

    {
      name: 'image',
      type: 'image',
      path: `${process.env.API_CONFIG}upload/im1.png`,
    },
    {
      name: 'image',
      type: 'image',
      path: `${process.env.API_CONFIG}upload/im2.png`,
    },
    {
      name: 'image',
      type: 'image',
      path: `${process.env.API_CONFIG}upload/im3.png`,
    }, 
    {
      name: 'image',
      type: 'image',
      path: `${process.env.API_CONFIG}upload/im4.png`,
    },
  ];

  await Promise.all(
    content6.map(async (el) => {
      if (el.name === 'title') {
        var data = {
          title: 'title',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: el.content,
          subComponentId: homePageSection6.id,
        };
      } else {
        var data = {
          ...data,
          title: 'image',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: 'cover backgound',
          subComponentId: homePageSection6.id,
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

  //AboutUs Page
  //create subComponent pageabout Us
  let aboutPageSection1 = await prisma.subComponent.create({
    data: {
      name: 'section1',
      mainId: aboutPage.id,
      position: 'section',
    },
  });
  let aboutPageSection2 = await prisma.subComponent.create({
    data: {
      name: 'section2',
      mainId: aboutPage.id,
      position: 'section',
    },
  });
  let aboutPageSection3 = await prisma.subComponent.create({
    data: {
      name: 'section3',
      mainId: aboutPage.id,
      position: 'section',
    },
  });

  let aboutPageSection4 = await prisma.subComponent.create({
    data: {
      name: 'section4',
      mainId: aboutPage.id,
      position: 'section',
    },
  });
  let aboutPageSection5 = await prisma.subComponent.create({
    data: {
      name: 'section5',
      mainId: aboutPage.id,
      position: 'section',
    },
  });
  let aboutPageSection6 = await prisma.subComponent.create({
    data: {
      name: 'section6',
      mainId: aboutPage.id,
      position: 'section',
    },
  });
  let aboutPageSection7 = await prisma.subComponent.create({
    data: {
      name: 'section7',
      mainId: aboutPage.id,
      position: 'section',
    },
  });

  //create content sub component aboutPageSection1
  let con = [
    { name: 'paragraph', path: '', type: 'paragraph' },
    { name: 'image', path: '', type: 'image' },
    { name: 'Show more', path: '#aboutus', type: 'button' },
  ];

  await Promise.all(
    con.map(async (el) => {
      if (el.name === 'paragraph') {
        var data = {
          title: 'paragraph',
          type: el.type as ContentType,
          navigateTo: el.path,
          content:
            'D-Grow, An Industry-Leading Provider Of Innovative Digital Solutions, Stands At The Forefront Of Revolutionizing The Way Businesses Interact With The Digital World. With Our Unwavering Commitment To Excellence, We Specialize In Crafting Exceptional Websites And Mobile Applications That Redefine User Experiences.',
          subComponentId: aboutPageSection1.id,
        };
      } else if (el.name === 'image') {
        var data = {
          title: 'image',
          type: el.type as ContentType,
          navigateTo: el.path,
          content:
            'C:/Users/user/Desktop/d-grow-platform/client/src/constants/imgabout.json',
          subComponentId: aboutPageSection1.id,
        };
      } else {
        var data = {
          title: 'button',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: el.name,
          subComponentId: aboutPageSection1.id,
        };
      }
      await prisma.contentSubComponent.create({
        data,
      });
    }),
  );

  //create content sub component aboutPageSection2

  let data1 = [
    {
      name: ' We work with business owners across all industries in all cities. We love meeting (in-person or virtually) with each of our clients to discover who they are, what they do, and why they shine.By choosing D-Grow as your digital partner, you can establish a strong online presence and unlock the full potential of the digital realm. Join us on this transformative journey, where innovation meets elegance and technology merges with imagination. Together, we will pave the way for your digital success. Our clients include: JALYSS.COM',
      path: '/',
      type: 'paragraph',
    },
    {
      type: 'image',
      name: '',
      path: '',
      subContent: [
        { src1: '' },
        { src2: '' },
        { src3: '' },
        { src4: '' },
        { src5: '' },
      ],
    },
  ];

  await Promise.all(
    data1.map(async (e) => {
      let data = {
        title: 'section2',
        type: e.type as ContentType,
        navigateTo: e.path,
        content: e.name,
        subComponentId: aboutPageSection2.id,
      };
      if (e.type === 'image') {
        data['subContent'] = e.subContent as Prisma.JsonArray;
      }
      await prisma.contentSubComponent.create({
        data,
      });
    }),
  );

  //create content sub component aboutPageSection3

  let data2 = [
    {
      name: 'Our Team Consists Of A Group Of Highly Skilled Professionals Who Are Passionate About Leveraging The Power Of Technology To Create Digital Solutions That Propel Businesses To New Heights. Drawing From Our Extensive Industry Expertise And A Deep Understanding Of The Ever-Evolving Digital Landscape, We Are Dedicated To Delivering Solutions That Exceed Expectations.',
      path: '/',
      type: 'paragraph',
    },

    {
      type: 'image',
      name: '',
      path: '',
      subContent: [
        [
          {
            name: 'Olive Yew',
            image: 'member1',
            role: 'Web Developer',
          },
          {
            name: 'Olive Tree',
            image: 'member2',
            role: 'Backend Developer',
          },
          {
            name: 'Maureen Biologist',
            image: 'member3',
            role: 'Web Desginer',
          },
          {
            name: 'Lynn O’Leeum',
            image: 'member4',
            role: 'Product Manager',
          },
        ],
        [
          {
            name: 'Simon Sais',
            image: 'member5',
            role: 'Web Developer',
          },
          {
            name: 'Audie Yose',
            image: 'member6',
            role: 'UX Developer',
          },
          {
            name: 'Anita Bath',
            image: 'member7',
            role: 'Comunity Manager',
          },
          {
            name: 'Stan Dupp',
            image: 'member8',
            role: 'Web Developer',
          },
        ],
      ],
    },
  ];

  await Promise.all(
    data2.map(async (e) => {
      let data = {
        title: 'section3',
        type: e.type as ContentType,
        navigateTo: e.path,
        content: e.name,
        subComponentId: aboutPageSection3.id,
      };
      if (e.type === 'image') {
        data['subContent'] = e.subContent as Prisma.JsonArray;
      }
      await prisma.contentSubComponent.create({
        data,
      });
    }),
  );

  //create content sub component aboutPageSection4

  let data3 = [
    {
      name: ' At D-Grow, we offer comprehensive digital strategy consulting services. Our experts develop customized strategies aligned with your goals, leveraging the latest trends and technologies. We provide valuable insights through market analysis, consumer behavior, and competitor landscapes. Our commitment to excellence ensures high-quality solutions from concept to execution,exceeding your expectations.',
      path: '/',
      type: 'paragraph',
    },

    {
      type: 'image',
      name: '',
      path: '',
      subContent: [
        [
          {
            name: 'Full Control',
            description: '  You can make changes anytime, anywhere.',
          },
          {
            name: 'Mobile Responsiveness',
            description:
              'Your website will look great on mobile, tablet, and desktop.',
          },
          {
            name: 'Gorgeous Design',
            description:
              'Beautiful, sleek design tailored to you and your business.',
          },
          {
            name: 'Friendly Support',
            description:
              'Our staff is always happy to help, even after your website has been delivered!',
          },
          {
            name: 'Strategized Advertising',
            description:
              ' Get your website featured on top searches to be chosen ahead  of competitors.',
          },
          {
            name: 'SEO',
            description:
              'Rank high on search engine results to increase your visitors and customers!',
          },
        ],
      ],
    },
  ];

  await Promise.all(
    data3.map(async (e) => {
      let data = {
        title: 'section4',
        type: e.type as ContentType,
        navigateTo: e.path,
        content: e.name,
        subComponentId: aboutPageSection4.id,
      };
      if (e.type === 'image') {
        data['subContent'] = e.subContent as Prisma.JsonArray;
      }
      await prisma.contentSubComponent.create({
        data,
      });
    }),
  );
  //create content sub component aboutPageSection4
  let data4 = await prisma.contentSubComponent.create({
    data: {
      title: 'section5',
      navigateTo: '',
      content:
        'D-Grow, an industry-leading provider of innovative digital solutions, stands at the forefront of revolutionizing the way businesses interact with the digital world. With our unwavering commitment to excellence, we specialize in crafting exceptional websites and mobile applications that redefine user experiences. When it comes to mobile application development, we pride ourselves on our ability to transform ideas into captivating and feature-rich applications. Whether its creating a user-friendly interface, implementing complex functionalities, or optimizing performance across various devices, our team excels in crafting mobile applications that stand out from the competition In the realm of web development, we strive to build websites that leave a lasting impression. We go beyond just aesthetics and focus ondeveloping websites that seamlessly blend visual appeal with intuitive navigation and robust functionality. Our approach ensures that every website we create not only captures attention but also delivers a smooth and engaging user experience.',
      subComponentId: aboutPageSection5.id,
    },
  });
  //create content sub component Left Header

  let HeaderLeftContent = await prisma.contentSubComponent.create({
    data: {
      title: 'logo',
      navigateTo: '/',
      content: 'Sfectoria',
      subComponentId: headerLeft.id,
    },
  });

  //create content sub component Middle Header
  let contents = [
    { name: 'Home', path: '/', type: 'button' },
    { name: 'About', path: '/about-us', type: 'button' },
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

  //create content sub component Right Header
  let headerRightContent = await prisma.contentSubComponent.create({
    data: {
      title: 'image',
      navigateTo: '',
      content: '/',
      subComponentId: headerRight.id,
    },
  });
  await Promise.all(
    contents.map(async (elem) => {
      let data = {
        title: 'button',
        type: elem.type as ContentType,
        navigateTo: elem.path,
        content: elem.name,
        subComponentId: headerMiddle.id,
      };
      if (elem.type === 'select') {
        data['subContent'] = elem.subContent as Prisma.JsonArray;
      }
      await prisma.contentSubComponent.create({
        data,
      });
    }),
  );

  //Services Page
  //create subcomponent services
  let servicePageSection1 = await prisma.subComponent.create({
    data: {
      name: 'section1',
      mainId: servicesPage.id,
      position: 'section',
    },
  });
  let servicePageSection2 = await prisma.subComponent.create({
    data: {
      name: 'section2',
      mainId: servicesPage.id,
      position: 'section',
    },
  });
  let servicePageSection3 = await prisma.subComponent.create({
    data: {
      name: 'section3',
      mainId: servicesPage.id,
      position: 'section',
    },
  });

  //create contentSubComponent servicesPage
  //servicePageSection1
  let serviceContent1 = [
    { name: 'title', path: '', type: 'paragraph' },
    { name: 'paragraph', path: '', type: 'paragraph' },
    { name: 'image', path: '', type: 'image' },
  ];

  await Promise.all(
    serviceContent1.map(async (el) => {
      if (el.name === 'title') {
        var data = {
          title: 'title',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: 'Our Services',
          subComponentId: servicePageSection1.id,
        };
      } else if (el.name === 'paragraph') {
        var data = {
          title: 'paragraph',
          type: el.type as ContentType,
          navigateTo: el.path,
          content:
            'Our Services, refers to the specific range of professional offerings or solutions provided by a development company or organization. These services are focused on the creation, improvement, or maintenance of software applications, websites, or other digital products. The development services provided aim to meet the specific needs and requirements of clients, often involving various stages of the software development life cycle. Here are a few examples of how',
          subComponentId: servicePageSection1.id,
        };
      } else {
        var data = {
          title: 'image',
          type: el.type as ContentType,
          navigateTo: el.path,
          content:
            'C:/Users/user/Desktop/d-grow-platform/client/src/constants/imgabout.json',
          subComponentId: servicePageSection1.id,
        };
      }
      await prisma.contentSubComponent.create({
        data,
      });
    }),
  );

     //create contentSubComponent servicePageSection2
     let serviceContent2 = [
      { name: 'title', path: '', type: 'paragraph' },
      { name: 'paragraph', path: '', type: 'paragraph' }
  
    ];
    await Promise.all(
      serviceContent2.map(async (el) => {
        if (el.name === 'title') {
          var data = {
            title: 'title',
            type: el.type as ContentType,
            navigateTo: el.path,
            content:'Custom Software Development',
             subComponentId: servicePageSection2.id,
          };
        } 
       else  {
          var data = {
            title: 'paragraph',
            type: el.type as ContentType,
            navigateTo: el.path,
            content:'Our Services in Development encompass the creation of tailor-made software solutions to address the unique requirements of businesses or individuals. We work closely with clients to understand their objectives and develop custom software applications from scratch. Our development team utilizes the latest technologies and methodologies to design, code, test, and deploy software that meets specific functionalities, user experience, and scalability needs.',
             subComponentId: servicePageSection2.id,
          };
        } 
        await prisma.contentSubComponent.create({
          data,
        });
      }),
    );
     //create contentSubComponent servicePageSection3
     let serviceContent3 = [
      { name: 'title', path: '', type: 'paragraph' },
      { name: 'paragraph', path: '', type: 'paragraph' },
      { name: 'image', path: '', type: 'image' },
     { name: 'See More', path: '#aboutus', type: 'button' }
  
    ];
    


  // create content sub component homePageSection2
  let data5 = [
    
    {
      type: 'paragraph',
      name: '',
      path: '',
      subContent: [
        { content1: "It is a distinct pleasure for me to recommend D-Grow to any and all interested parties.They have been professional, comprehensive and competent throughout the process of our working together. We feel that we have established a relationship with them for years to come. The reaction to our new web site has been overwhelmingly positive." },
        { content2: "Compared to the other companies we have used in the past, D-Grow has been far and above the best in every area. While building our new web site,the customer service has been prompt and straightforward and the actual services are well documented and logical to our needs." },
        { content3: "Since having our new website built by D-Grow, we have seen a 200% increase in the number of online contact forms being filled out and returned to us.Matt and his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized and effective. Thanks to D-Grow for all of your hard work and support! " },
        
      ],
    },
  ];
  
  await Promise.all(
    data5.map(async (e) => {
      let data = {
        title: 'section',
        type: e.type as ContentType,
        navigateTo: e.path,
        content: e.name,
        subComponentId: homePageSection2.id,
      };
      if (e.type === 'paragraph') {
        data['subContent'] = e.subContent as Prisma.JsonArray;
      }
      await prisma.contentSubComponent.create({
        data
      });
    })
  );
  

  //create contentSubComponent servicePageSection2
  // let serviceContent2 = [
  //   { name: 'title', path: '', type: 'paragraph' },
  //   { name: 'paragraph', path: '', type: 'paragraph' },
  // ];
  // await Promise.all(
  //   serviceContent2.map(async (el) => {
  //     if (el.name === 'title') {
  //       var data = {
  //         title: 'title',
  //         type: el.type as ContentType,
  //         navigateTo: el.path,
  //         content: 'Custom Software Development',
  //         subComponentId: servicePageSection2.id,
  //       };
  //     } else {
  //       var data = {
  //         title: 'paragraph',
  //         type: el.type as ContentType,
  //         navigateTo: el.path,
  //         content:
  //           'Our Services in Development encompass the creation of tailor-made software solutions to address the unique requirements of businesses or individuals. We work closely with clients to understand their objectives and develop custom software applications from scratch. Our development team utilizes the latest technologies and methodologies to design, code, test, and deploy software that meets specific functionalities, user experience, and scalability needs.',
  //         subComponentId: servicePageSection2.id,
  //       };
  //     }
  //     await prisma.contentSubComponent.create({
  //       data,
  //     });
  //   }),
  // );
  // //create contentSubComponent servicePageSection3
  // let serviceContent3 = [
  //   { name: 'title', path: '', type: 'paragraph' },
  //   { name: 'paragraph', path: '', type: 'paragraph' },
  //   { name: 'image', path: '', type: 'image' },
  //   { name: 'See More', path: '#aboutus', type: 'button' },
  // ];
};
