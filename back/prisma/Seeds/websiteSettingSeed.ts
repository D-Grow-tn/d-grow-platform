import { ContentType, Prisma, PrismaClient } from '@prisma/client';
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
      name:'section2',
      mainId: aboutPage.id,
      position: 'section'
      }
  })
  let aboutPageSection3 = await prisma.subComponent.create({
    data: {
      name: 'section3',
      mainId: aboutPage.id,
      position: 'section',
    },
  }
  )
      
  let aboutPageSection4 = await prisma.subComponent.create({
    data: {
      name: 'section4',
      mainId: aboutPage.id,
      position: 'section',
    },
  }
  )
  let aboutPageSection5 = await prisma.subComponent.create({
    data: {
      name: 'section5',
      mainId: aboutPage.id,
      position: 'section',
    },
  }
  )
  let aboutPageSection6 = await prisma.subComponent.create({
    data: {
      name: 'section6',
      mainId: aboutPage.id,
      position: 'section',
    },
  }
  )
  let aboutPageSection7 = await prisma.subComponent.create({
    data: {
      name: 'section7',
      mainId: aboutPage.id,
      position: 'section',
    },
  }
  )



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
          content:'D-Grow, An Industry-Leading Provider Of Innovative Digital Solutions, Stands At The Forefront Of Revolutionizing The Way Businesses Interact With The Digital World. With Our Unwavering Commitment To Excellence, We Specialize In Crafting Exceptional Websites And Mobile Applications That Redefine User Experiences.',
           subComponentId: aboutPageSection1.id,
        };
      } else if (el.name === 'image') {
        var data = {
          title: 'image',
          type: el.type as ContentType,
          navigateTo: el.path,
          content:"C:/Users/user/Desktop/d-grow-platform/client/src/constants/imgabout.json",
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
    { name: ' We work with business owners across all industries in all cities. We love meeting (in-person or virtually) with each of our clients to discover who they are, what they do, and why they shine.By choosing D-Grow as your digital partner, you can establish a strong online presence and unlock the full potential of the digital realm. Join us on this transformative journey, where innovation meets elegance and technology merges with imagination. Together, we will pave the way for your digital success. Our clients include: JALYSS.COM', path: '/', type: 'paragraph' },
    {
      type: 'image',
      name: '',
      path: '',
      subContent: [
        { src1: "" },
        { src2: "" },
        { src3: "" },
        { src4: "" },
        { src5: "" },
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
        data
      });
    })
  );

 //create content sub component aboutPageSection3

let data2 = [
     { name: 'Our Team Consists Of A Group Of Highly Skilled Professionals Who Are Passionate About Leveraging The Power Of Technology To Create Digital Solutions That Propel Businesses To New Heights. Drawing From Our Extensive Industry Expertise And A Deep Understanding Of The Ever-Evolving Digital Landscape, We Are Dedicated To Delivering Solutions That Exceed Expectations.', path: '/', type: 'paragraph' },

    {
      type: 'image',
      name: '',
      path: '',
      subContent: 
      [
        [
          {
            name: "Olive Yew",
            image: "member1",
            role: "Web Developer",
          },
          {
            name: "Olive Tree",
            image: "member2",
            role: "Backend Developer",
          },
          {
            name: "Maureen Biologist",
            image: "member3",
            role: "Web Desginer",
          },
          {
            name: "Lynn O’Leeum",
            image: "member4",
            role: "Product Manager",
          },
        ],
        [
          {
            name: "Simon Sais",
            image: "member5",
            role: "Web Developer",
          },
          {
            name: "Audie Yose",
            image: "member6",
            role: "UX Developer",
          },
          {
            name: "Anita Bath",
            image: "member7",
            role: "Comunity Manager",
          },
          {
            name: "Stan Dupp",
            image: "member8",
            role: "Web Developer",
          },
        ],
      ]
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
        data
        
      });
      
   
    }),
    
  );


   //create content sub component aboutPageSection4

let data3 = [
  { name: ' At D-Grow, we offer comprehensive digital strategy consulting services. Our experts develop customized strategies aligned with your goals, leveraging the latest trends and technologies. We provide valuable insights through market analysis, consumer behavior, and competitor landscapes. Our commitment to excellence ensures high-quality solutions from concept to execution,exceeding your expectations.', path: '/', type: 'paragraph' },

 {
   type: 'image',
   name: '',
   path: '',
   subContent: 
   [
     [
       {
        name: "Full Control",
        description:"  You can make changes anytime, anywhere.",
        
      },
      {
        name: "Mobile Responsiveness",
        description:"Your website will look great on mobile, tablet, and desktop.",
        
      },
      {
        name: "Gorgeous Design",
        description:"Beautiful, sleek design tailored to you and your business.",
      
      },
      {
        name: "Friendly Support",
        description:"Our staff is always happy to help, even after your website has been delivered!",
       
      },
      {
        name: "Strategized Advertising",
        description:" Get your website featured on top searches to be chosen ahead  of competitors.",
      
      },
      {
        name: "SEO",
        description:"Rank high on search engine results to increase your visitors and customers!",
       
      },
     ],
    
   ]
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
     data
     
   });
   

 }),
 
);
//create content sub component aboutPageSection4
let data4 = await prisma.contentSubComponent.create({
  data: {
    title: 'section5',
    navigateTo: '',
    content: 'D-Grow, an industry-leading provider of innovative digital solutions, stands at the forefront of revolutionizing the way businesses interact with the digital world. With our unwavering commitment to excellence, we specialize in crafting exceptional websites and mobile applications that redefine user experiences. When it comes to mobile application development, we pride ourselves on our ability to transform ideas into captivating and feature-rich applications. Whether its creating a user-friendly interface, implementing complex functionalities, or optimizing performance across various devices, our team excels in crafting mobile applications that stand out from the competition In the realm of web development, we strive to build websites that leave a lasting impression. We go beyond just aesthetics and focus ondeveloping websites that seamlessly blend visual appeal with intuitive navigation and robust functionality. Our approach ensures that every website we create not only captures attention but also delivers a smooth and engaging user experience.',
   subComponentId:aboutPageSection5.id,
  },
});
  //create content sub component Left Header

  let HeaderLeftContent = await prisma.contentSubComponent.create({
    data: {
      title: 'logo',
      navigateTo: '/',
      content: 'D-Grow',
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

  //create content sub component homePageSection1

  let content = [
    { name: 'paragraph', path: '', type: 'paragraph' },
    { name: 'image', path: '', type: 'image' },
    { name: 'Show more', path: '/about-us', type: 'button' },
  ];

  await Promise.all(
    content.map(async (el) => {
      if (el.name === 'paragraph') {
        var data = {
          title: 'paragraph',
          type: el.type as ContentType,
          navigateTo: el.path,
          content:
            'Unleash Your Digital Potential Transforming Businesses with Exquisite Websites and Powerful Mobile Applications  we pride ourselves on delivering high-quality solutions that combine cutting-edge technology, aesthetic design, and user-centric functionality.',
          subComponentId: homePageSection1.id,
        };
      } else if (el.name === 'image') {
        var data = {
          title: 'image',
          type: el.type as ContentType,
          navigateTo: el.path,
          content:"C:/Users/user/Desktop/d-grow-platform/client/src/constants/dev.json",
          subComponentId: homePageSection1.id,
        };
      } else  {
        var data = {
          title: 'button',
          type: el.type as ContentType,
          navigateTo: el.path,
          content: 'Read more',
          subComponentId: homePageSection1.id,
        };
      }
      await prisma.contentSubComponent.create({
        data,
      });
    }),
  );


};
