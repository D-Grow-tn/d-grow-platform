import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { websiteSettingsSeed } from './Seeds/websiteSettingSeed';

const prisma = new PrismaClient();

async function main() {
  if ((await prisma.user.findMany()).length) {
    console.log('skip seeding');
    return;
  }

  let cover1 = await prisma.media.create({
    data: {
      path: 'https://thumbs.dreamstime.com/b/person-programmer-working-pc-laptop-program-code-screen-coding-programming-vector-concept-person-programmer-working-107767154.jpg',
      type: 'cover',
      extension: 'png',
    },
  });
  let cover2 = await prisma.media.create({
    data: {
      path: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      type: 'cover',
      extension: 'png',
    },
  });
  let cover3 = await prisma.media.create({
    data: {
      path: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      type: 'cover',
      extension: 'png',
    },
  });
  let avatarClient1 = await prisma.media.create({
    data: {
      path: 'https://scontent.ftun14-1.fna.fbcdn.net/v/t1.6435-9/95926704_4252204308126815_1713291814770835456_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=4G2GM9QpEzMAX_I_fr6&_nc_ht=scontent.ftun14-1.fna&oh=00_AfAAQz6tiYP8qmV74y9Ev9uD9wvhcq8d7RfuypktNlcIBQ&oe=64B2CD0C',
      type: 'avatar',
      extension: 'png',
    },
  });
  let avatarClient2 = await prisma.media.create({
    data: {
      path: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      type: 'avatar',
      extension: 'png',
    },
  });
  let avatarClient3 = await prisma.media.create({
    data: {
      path: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      type: 'avatar',
      extension: 'png',
    },
  });
  let avatarClient4 = await prisma.media.create({
    data: {
      path: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      type: 'avatar',
      extension: 'png',
    },
  });

  //hhhgg
  let mediaEvent1 = await prisma.media.create({
    data: {
      path: 'https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg',
      type: 'image',
      extension: 'png',
    },
  });

  //create client
  let client1 = await prisma.client.create({
    data: {
      name: 'd-grow1',
      email: 'd-grow1@gmail.com',
      phone: '44444444',
      address: 'tunis',
      avatarClientId: avatarClient1.id,
    },
  });
  let client2 = await prisma.client.create({
    data: {
      name: 'd-grow2',
      email: 'd-grow2@gmail.com',
      phone: '44444444',
      address: 'tunis',
      avatarClientId: avatarClient2.id,
    },
  });

  let client3 = await prisma.client.create({
    data: {
      name: 'd-grow3',
      email: 'd-grow3@gmail.com',
      phone: '44444444',
      address: 'tunis',
      avatarClientId: avatarClient3.id,
    },
  });

  let client4 = await prisma.client.create({
    data: {
      name: 'd-grow4',
      email: 'inesdebichi1995@gmail.com',
      phone: '44444444',
      address: 'tunis',
      avatarClientId: avatarClient4.id,
    },
  });

  let employee1 = await prisma.employee.create({
    data: {
      name: 'khalil',
      bio: 'String',
      email: 'String',
      phone: 'String',
      address: 'string',
      avatarId: avatarClient4.id,
    },
  });
  let employee2 = await prisma.employee.create({
    data: {
      name: 'ines',
      bio: 'String',
      email: 'String',
      phone: 'String',
      address: 'string',
      avatarId: avatarClient4.id,
      directManegerId: employee1.id,
    },
  });
  let employee3 = await prisma.employee.create({
    data: {
      name: 'Rania elouni',
      bio: 'String',
      email: 'String',
      phone: 'String',
      address: 'string',
      avatarId: avatarClient4.id,
      directManegerId: employee1.id,
    },
  });
  let employee4 = await prisma.employee.create({
    data: {
      name: 'ghada',
      bio: 'String',
      email: 'String',
      phone: 'String',
      address: 'string',
      avatarId: avatarClient4.id,
      directManegerId: employee2.id,
    },
  });
  let employee5 = await prisma.employee.create({
    data: {
      name: 'aymen',
      bio: 'String',
      email: 'String',
      phone: 'String',
      address: 'string',
      avatarId: avatarClient4.id,
      directManegerId: employee2.id,
    },
  });
  let employee6 = await prisma.employee.create({
    data: {
      name: 'slim',
      bio: 'String',
      email: 'String',
      phone: 'String',
      address: 'string',
      avatarId: avatarClient4.id,
      directManegerId: employee2.id,
    },
  });
  let employee7 = await prisma.employee.create({
    data: {
      name: 'ahmed',
      bio: 'String',
      email: 'String',
      phone: 'String',
      address: 'string',
      avatarId: avatarClient4.id,
      directManegerId: employee2.id,
    },
  });
  // create users
  const salt = await bcrypt.genSalt();
  let user1 = await prisma.user.create({
    data: {
      name: 'd-grow1',
      email: 'd-grow1@gmail.com',
      clientId: client1.id,
      password: await bcrypt.hash('1234', salt),
      isClient: true,
      //   mediaId: media.id,
    },
  });

  let user2 = await prisma.user.create({
    data: {
      name: 'd-grow2',
      email: 'd-grow2@gmail.com',
      clientId: client2.id,
      password: await bcrypt.hash('1234', salt),
      isClient: true,
      // mediaId   :  media.id,
    },
  });

  let user3 = await prisma.user.create({
    data: {
      name: 'd-grow3',
      email: 'd-grow3@gmail.com',
      clientId: client3.id,
      password: await bcrypt.hash('1234', salt),
      isClient: true,
      // mediaId   :  media.id,
    },
  });

  let user4 = await prisma.user.create({
    data: {
      name: 'd-grow4',
      email: 'inesdebichi1995@gmail.com',
      clientId: client4.id,
      password: await bcrypt.hash('1234', salt),
      isClient: true,
      // mediaId   :  media.id,
    },
  });
  let user5 = await prisma.user.create({
    data: {
      name: 'd-grow5',
      email: 'raniaelouni421@gmail.com',
      employeeId: employee3.id,
      password: await bcrypt.hash('1234', salt),
      isClient: false,
      // mediaId   :  media.id,
    },
  });
  let user6 = await prisma.user.create({
    data: {
      name: 'khalil',
      email: 'khalil@gmail.com',
      employeeId: employee1.id,
      password: await bcrypt.hash('1234', salt),
      isClient: false,
      // mediaId   :  media.id,
    },
  });
  let user7 = await prisma.user.create({
    data: {
      name: 'ines',
      email: 'ines@gmail.com',
      employeeId: employee2.id,
      password: await bcrypt.hash('1234', salt),
      isClient: false,
      // mediaId   :  media.id,
    },
  });
  let user8 = await prisma.user.create({
    data: {
      name: 'ghada',
      email: 'ghada@gmail.com',
      employeeId: employee4.id,
      password: await bcrypt.hash('1234', salt),
      isClient: false,
      // mediaId   :  media.id,
    },
  });
  let contract = await prisma.media.create({
    data: {
      path: 'https://www.africau.edu/images/default/sample.pdf',
      extension: 'jpg',
      type: 'file',
    },
  });
  //create project
  let project1 = await prisma.project.create({
    data: {
      name: 'E-commerce Website Development',
      clientId: client1.id,
      description: 'Building an online store for XYZ Corporation',
      duration: '2 months',
      projectManagerId: employee1.id,
      consultantId: employee2.id,
      startAt: new Date('01/05/2023'),
      endAt: new Date('01/07/2023'),
      status: 'pending',
      contractId: contract.id,
      coverId: cover1.id,
    },
  });

  let project2 = await prisma.project.create({
    data: {
      name: 'Corporate Website Redesign',
      clientId: client1.id,
      description: 'Revamping the existing website for ABC Corporation',
      duration: 'One month',
      projectManagerId: employee1.id,
      consultantId: employee2.id,
      startAt: new Date('01/05/2023'),
      endAt: new Date('01/07/2023'),
      status: 'in_progress',
      coverId: cover2.id,
    },
  });
  let project3 = await prisma.project.create({
    data: {
      name: 'Mobile App Development',
      clientId: client2.id,
      description: 'Creating a mobile application for PQR Ltd.',
      duration: 'One month',
      projectManagerId: employee1.id,
      consultantId: employee2.id,
      startAt: new Date('01/05/2023'),
      endAt: new Date('01/07/2023'),
      status: 'completed',
      coverId: cover3.id,
    },
  });

  // create objective
  let objective1Project1 = await prisma.objective.create({
    data: {
      name: 'UX/UI Design',
      decription:
        'Improve the visual design and user experience of the e-commerce website.',
      projectId: project1.id,
      startAt: new Date('01/05/2023'),
      endAt: new Date('01/08/2023'),
      status: 'in_progress',
    },
  });

  let objective2Project1 = await prisma.objective.create({
    data: {
      name: 'Backend',
      decription:
        'Develop the server-side functionality and integrate the database for the e-commerce website.',
      projectId: project1.id,
      startAt: new Date('01/05/2023'),
      endAt: new Date('01/09/2023'),
      status: 'in_progress',
    },
  });
  let objective3Project1 = await prisma.objective.create({
    data: {
      name: 'Payment Gateway ',
      decription:
        'Integrate a secure and reliable payment gateway to facilitate smooth and secure online transactions.',
      projectId: project1.id,
      startAt: new Date('01/05/2023'),
      endAt: new Date('01/07/2023'),
    },
  });

  let objective4Project1 = await prisma.objective.create({
    data: {
      name: 'Performance Optimization',
      decription:
        'Optimize the performance of the e-commerce website to ensure fast loading times and efficient resource utilization.',
      projectId: project1.id,
      startAt: new Date('01/05/2023'),
      endAt: new Date('01/09/2023'),
    },
  });

  // create sub_Objective
  let subObjective1Ojective1Project1 = await prisma.subObjective.create({
    data: {
      name: 'User Interface Design',
      objectiveId: objective1Project1.id,
      description:
        'Create an intuitive and visually appealing user interface for the e-commerce website.',
      status: 'completed',
    },
  });
  let subObjective2Ojective1Project1 = await prisma.subObjective.create({
    data: {
      name: 'Responsive Design',
      objectiveId: objective1Project1.id,
      description:
        'Ensure that the e-commerce website is responsive and optimally displayed on different devices and screen sizes.',
      status: 'in_progress',
    },
  });
  let subObjective3Ojective1Project1 = await prisma.subObjective.create({
    data: {
      name: 'Usability Testing',
      objectiveId: objective1Project1.id,
      description:
        "Conduct usability tests with target users to identify areas for improvement in the website's design and user experience.",
    },
  });
  let subObjective1Objective4Project1 = await prisma.subObjective.create({
    data: {
      name: 'Performance Analysis and Profiling',
      objectiveId: objective4Project1.id,
      description:
        "Conduct a comprehensive performance analysis of the e-commerce website to identify bottlenecks and areas for optimization. Use profiling tools to measure and analyze the application's resource usage and performance metrics.",
    },
  });
  let subObjective1Ojective2Project1 = await prisma.subObjective.create({
    data: {
      name: 'Database Design and Setup',
      objectiveId: objective2Project1.id,
      description:
        'Design and set up the database schema for the application, including tables, relationships, and indexes.',
      status: 'in_progress',
    },
  });

  let subObjective2Ojective2Project1 = await prisma.subObjective.create({
    data: {
      name: 'API Development',
      objectiveId: objective2Project1.id,
      description:
        'Develop the backend APIs to handle data retrieval, manipulation, and storage based on the defined requirements.',
      status: 'in_progress',
    },
  });
  let subObjective3Ojective2Project1 = await prisma.subObjective.create({
    data: {
      name: 'Authentication and Authorization',
      objectiveId: objective2Project1.id,
      description:
        'Implement secure user authentication and authorization mechanisms to control access to the application and its resources.',
      status: 'in_progress',
    },
  });

  let subObjective1Ojective3Project1 = await prisma.subObjective.create({
    data: {
      name: 'Research and Evaluation',
      objectiveId: objective3Project1.id,
      description:
        'Conduct research on available payment gateway options and evaluate their features, security, and reliability.',
    },
  });
  let subObjective2Ojective3Project1 = await prisma.subObjective.create({
    data: {
      name: 'Payment Gateway Selection',
      objectiveId: objective3Project1.id,
      description:
        'Choose the most suitable payment gateway based on the research and evaluation, taking into account factors like cost, integration options, and supported payment methods.',
    },
  });
  let subObjective3Ojective3Project1 = await prisma.subObjective.create({
    data: {
      name: 'Integration Implementation',
      objectiveId: objective3Project1.id,
      description:
        'Integrate the selected payment gateway into the e-commerce website or application, following the provided documentation and guidelines.',
    },
  });
  let subObjective4Ojective3Project1 = await prisma.subObjective.create({
    data: {
      name: 'Testing and Security',
      objectiveId: objective3Project1.id,
      description:
        'Perform thorough testing of the payment gateway integration, including functionality, security, and error handling, to ensure smooth and secure online transactions.',
    },
  });

  //create stage

  let stage1Project1 = await prisma.stage.create({
    data: {
      name: 'UI design',
      porcentage: '40',
      startAt: new Date('01/05/2023'),
      endAt: new Date('01/07/2023'),
      objectiveId: objective1Project1.id,
    },
  });
  let stage2Project1 = await prisma.stage.create({
    data: {
      name: 'UX design',
      porcentage: '20',
      startAt: new Date('01/05/2023'),
      endAt: new Date('01/07/2023'),
      objectiveId: objective1Project1.id,
      previousStageId: stage1Project1.id,
    },
  });
  let stage3Project1 = await prisma.stage.create({
    data: {
      name: 'Testing',
      porcentage: '20',
      startAt: new Date('01/05/2023'),
      endAt: new Date('01/07/2023'),
      objectiveId: objective1Project1.id,
      previousStageId: stage2Project1.id,
    },
  });

  let task1Stage1Project1 = await prisma.task.create({
    data: {
      points: 5,
      name: 'Logo e-comerce website',
      duration: '5',
      level: '2',
      stageId: stage1Project1.id,
      employeeId: employee1.id,
    },
  });
  let task2Stage1Project1 = await prisma.task.create({
    data: {
      points: 5,
      name: 'xd e-commerce website',
      duration: '5',
      level: '2',
      stageId: stage1Project1.id,
      employeeId: employee1.id,
    },
  });
  let task1Stage2Project1 = await prisma.task.create({
    data: {
      points: 5,
      name: 'about us page',
      duration: '5',
      level: '2',
      stageId: stage2Project1.id,
      employeeId: employee1.id,
    },
  });
  let task2Stage2Project1 = await prisma.task.create({
    data: {
      points: 5,
      name: 'home page',
      duration: '5',
      level: '2',
      stageId: stage2Project1.id,
      employeeId: employee2.id,
    },
  });
  let task1Stage3Project1 = await prisma.task.create({
    data: {
      points: 5,
      name: 'conception database',
      duration: '5',
      level: '2',
      stageId: stage3Project1.id,
      employeeId: employee3.id,
    },
  });
  let task2Stage3Project1 = await prisma.task.create({
    data: {
      points: 5,
      name: 'implimentation databse prisma',
      duration: '5',
      level: '2',
      stageId: stage3Project1.id,
      employeeId: employee3.id,
    },
  });
  //create interactions
  let interaction1Project1 = await prisma.interaction.create({
    data: {
      content:
        "I'm looking for someone to help me with a project. Are you available?",
      projectId: project1.id,
      UserId: user1.id,
    },
  });
  let interaction2Project1 = await prisma.interaction.create({
    data: {
      content:
        "Hi there! I'd be happy to assist you. Can you provide me with some details about the project?",
      projectId: project1.id,
      UserId: user6.id,
    },
  });
  let interaction3Project1 = await prisma.interaction.create({
    data: {
      content:
        'Sure! My business is a boutique fashion store specializing in trendy clothing and accessories. I want a website that showcases our products, provides information about our brand, and allows customers to make purchases online. Are you experienced in web design?',
      projectId: project1.id,
      UserId: user1.id,
    },
  });
  let interaction4Project1 = await prisma.interaction.create({
    data: {
      content:
        "Yes, I have experience in web design, including creating e-commerce websites. We can definitely create a website that highlights your products and reflects the style and vibe of your boutique. Do you have any specific preferences in terms of the website's design, color schemes, or layout?",
      projectId: project1.id,
      UserId: user6.id,
    },
  });
  let decision1 = await prisma.decision.create({
    data: {
      content: 'decision number 1',
      DecisionApply: { create: [{ employeeId: employee1.id }] },
    },
  });
  let decision2 = await prisma.decision.create({
    data: {
      content: 'decision number 2',
      DecisionApply: { create: [{ employeeId: employee2.id }] },
    },
  });

  //create Events
  let event1 = await prisma.event.create({
    data: {
      name: 'Event Name 1',
      description: 'description Event Number one ',
      startAt: new Date('01/05/2023'),
      endAt: new Date('01/07/2023'),
      employeeId: employee1.id,
      MediaEvent: { create: [{ mediaId: mediaEvent1.id }] },
    },
  });
//Create services
let productcover1 = await prisma.media.create({
  data: {
    path: 'https://fr.yeeply.com/wp-content/uploads/2017/01/webapp.jpg',
    type: 'cover',
    extension: 'png',
  },
});
let productcover2 = await prisma.media.create({
  data: {
    path: 'https://blog.flytagger.com/wp-content/uploads/2018/02/Application-mobile.jpg',
    type: 'cover',
    extension: 'png',
  },
});
let productcover3 = await prisma.media.create({
  data: {
    path: 'https://fr.yeeply.com/wp-content/uploads/2017/01/webapp.jpg',
    type: 'cover',
    extension: 'png',
  },
});
  let product1 = await prisma.product.create({
    data: {
      name: 'Web Front-End SOLUTIONS',
      description: 'Our web application development service is designed to provide you with tailored solutions to meet your unique business requirements. We specialize in developing high-quality, scalable, and user-friendly web applications using the latest technologies and best practices.',
      type:'web site application',
      productCoverId:productcover1.id,
    },
  });
  let product2 = await prisma.product.create({
    data: {
      name: 'UX/UI WEBsite AND MOBILE app',
      description : 'Our mobile app development service offers end-to-end solutions for creating robust and user-friendly applications for iOS and Android platforms. We combine creativity, technical expertise, and industry best practices to deliver mobile apps that engage users and drive business growth.',
      type:'mobile application',
        productCoverId:productcover2.id,
    },
  });
  let product3 = await prisma.product.create({
    data: {
      name: 'BRANDING AND CORPORATE DESIGN',
      description: 'description Event Number one',
      type:'design application',
        productCoverId:productcover3.id,
    },
  });
  let product4 = await prisma.product.create({
    data: {
      name: 'BRANDING AND CORPORATE DESIGN',
      description: 'description Event Number one',
      type:'design application',
        productCoverId:productcover3.id,
    },
  });
//create produtTye
let productype1 = await prisma.productType.create({
  data: {
    name: 'BRANDING AND CORPORATE DESIGN',
    description: 'description Event Number one',
 ProductId:product1.id
  },
});
 await websiteSettingsSeed(prisma);
}

main()
  .then((res) => console.log('seeding completed'))
  .catch((err) => console.log(err));
