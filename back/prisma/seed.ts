import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  if ((await prisma.user.findMany()).length) {
    console.log('skip seeding');
    return;
  }
  //create client
  let client1 = await prisma.client.create({
    data: {
      name: 'd-grow1',
      email: 'd-grow1@gmail.com',
      phone: '44444444',
      address: 'tunis',
    },
  });
  let client2 = await prisma.client.create({
    data: {
      name: 'd-grow2',
      email: 'd-grow2@gmail.com',
      phone: '44444444',
      address: 'tunis',
    },
  });

  let client3 = await prisma.client.create({
    data: {
      name: 'd-grow3',
      email: 'd-grow3@gmail.com',
      phone: '44444444',
      address: 'tunis',
    },
  });

  let client4 = await prisma.client.create({
    data: {
      name: 'd-grow4',
      email: 'inesdebichi1995@gmail.com',
      phone: '44444444',
      address: 'tunis',
    },
  });

  let employee1 = await prisma.employee.create({
    data: {
      name: 'khalil',
      bio: 'String',
      email: 'String',
      phone: 'String',
    },
  });
  let employee2 = await prisma.employee.create({
    data: {
      name: 'ines',
      bio: 'String',
      email: 'String',
      phone: 'String',
    },
  });
  let employee3 = await prisma.employee.create({
    data: {
      name: 'rania',
      bio: 'String',
      email: 'String',
      phone: 'String',
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
      email: 'rania@gmail.com',
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
      employeeId: employee2.id,
      password: await bcrypt.hash('1234', salt),
      isClient: false,
      // mediaId   :  media.id,
    },
  });
  let user7 = await prisma.user.create({
    data: {
      name: 'ines',
      email: 'ines@gmail.com',
      employeeId: employee1.id,
      password: await bcrypt.hash('1234', salt),
      isClient: false,
      // mediaId   :  media.id,
    },
  });

  //create project
  let project1 = await prisma.project.create({
    data: {
      name: 'project1',
      clientId: client1.id,
      description: 'String',
      duration: 'String',
      projectManagerId: employee1.id,
      consultantId: employee2.id,
      startAt: new Date(1 / 6 / 2023),
      endAt: new Date(30 / 6 / 2023),
      status: 'pending',
    },
  });
  let project2 = await prisma.project.create({
    data: {
      name: 'project2',
      clientId: client1.id,
      description: 'String',
      duration: 'String',
      projectManagerId: employee1.id,
      consultantId: employee2.id,
      startAt: new Date(1 / 5 / 2023),
      endAt: new Date(30 / 5 / 2023),
      status: 'in_progress',
    },
  });
  let project3 = await prisma.project.create({
    data: {
      name: 'project3',
      clientId: client2.id,
      description: 'String',
      duration: 'String',
      projectManagerId: employee1.id,
      consultantId: employee2.id,
      startAt: new Date(1 / 4 / 2023),
      endAt: new Date(30 / 4 / 2023),
      status: 'completed',
    },
  });

  // create objective
  let objective1Project1 = await prisma.objective.create({
    data: {
      name: 'String',
      decription: 'String',
      projectId: project1.id,
      startAt:new Date("01/05/2023"),
      endAt:new Date("01/09/2023"),
    },
  });

  let objective2Project1 = await prisma.objective.create({
    data: {
      name: 'String',
      decription: 'String',
      projectId: project1.id,
      startAt:new Date("01/05/2023"),
      endAt:new Date("01/09/2023"),
    },
  });
  let objective3Project1 = await prisma.objective.create({
    data: {
      name: 'String',
      decription: 'String',
      projectId: project1.id,
      startAt:new Date("01/05/2023"),
      endAt:new Date("01/09/2023"),
    },
  });

  // create sub_Objective
  let subObjective1Ojective1Project1 = await prisma.subObjective.create({
    data: {
      name: 'subObjective1',
      objectiveId: objective1Project1.id,
      description: 'String',
    },
  });
  let subObjective2Ojective1Project1 = await prisma.subObjective.create({
    data: {
      name: 'subObjective2',
      objectiveId: objective1Project1.id,
      description: 'String',
    },
  });
  let subObjective3Ojective1Project1 = await prisma.subObjective.create({
    data: {
      name: 'subObjective3',
      objectiveId: objective1Project1.id,
      description: 'String',
    },
  });
  //create stage
  let stage1Project1 = await prisma.stage.create({
    data: {
      name: 'design',
      porcentage: '20',
      startAt: new Date('01/05/2023'),
      endAt: new Date('01/07/2023'),
      objectiveId: objective1Project1.id,
    },
  });
  let stage2Project1 = await prisma.stage.create({
    data: {
      name: 'graphic integration',
      porcentage: '20',
      startAt: new Date('01/05/2023'),
      endAt: new Date('01/07/2023'),
      objectiveId: objective1Project1.id,
    },
  });
  let stage3Project1 = await prisma.stage.create({
    data: {
      name: 'database',
      porcentage: '20',
      startAt: new Date('01/05/2023'),
      endAt: new Date('01/07/2023'),
      objectiveId: objective1Project1.id,
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

  
}
main()
  .then((res) => console.log('seeding completed'))
  .catch((err) => console.log(err));
