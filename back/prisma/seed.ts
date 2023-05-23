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
      name: 'project1',
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
      name: 'project1',
      clientId: client1.id,
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
    },
  });

  let objective2Project1 = await prisma.objective.create({
    data: {
      name: 'String',
      decription: 'String',
      projectId: project1.id,
    },
  });
  let objective3Project1 = await prisma.objective.create({
    data: {
      name: 'String',
      decription: 'String',
      projectId: project1.id,
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
}
main()
  .then((res) => console.log('seeding completed'))
  .catch((err) => console.log(err));
