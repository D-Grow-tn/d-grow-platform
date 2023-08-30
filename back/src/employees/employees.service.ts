import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Employee } from '@prisma/client';

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    return await this.prisma.employee.create({
      data: createEmployeeDto,
    });
  }

  async findAll() {
    return await this.prisma.employee.findMany({
      include: {
        employeeTest: true,
        avatar: true,
        teamMembership: { include: { team: true } },
        EmployeeChatRoom: { include: { chatRoom: true } },
        EmployeeQuiz: { include: { quiz: true } },

        Membership: {
          include: {
            event: true,
          },
        },
        DecisionApply: true,
      },
    });
  }

  async findTree(myId: string) {
    let result = [];
    // 1- find me and my direct manager
    let me = await this.prisma.employee.findUniqueOrThrow({
      where: { id: myId },
      include: { directManager: true },
    });
    if (me.directManagerId) {
      result.push(me.directManager);
    }
    // 2- find siblings
    let siblings = await this.prisma.employee.findMany({
      where: { directManagerId: me.directManagerId, id: { not: myId } },
    });
    // 3- find my children andd their children
    let children = await this.prisma.employee.findMany({
      where: { directManagerId: myId },
    });
    result = [...result, ...siblings, ...children];
    await this.childrenOfChild(children, result);
    return result;
  }

  async findOne(id: string) {
    return await this.prisma.employee.findFirst({
      where: {
        id,
      },
      include: {
        Membership: {
          include: {
            event: true,
          },
        },
        directManager:true,
        DecisionApply: {
          include: {
            decision: true,
          },
        },
        avatar:true
      },
    });
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return await this.prisma.employee.update({
      where: { id },
      include: {
        Membership: {
          include: {
            event: true,
          },
        },
        DecisionApply: {
          include: {
            decision: true,
          },
        },
      },
      data: updateEmployeeDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.employee.delete({ where: { id } });
  }

  private async childrenOfChild(children: Employee[], result: Employee[]) {
    await Promise.all(
      children.map(async (child) => {
        let childrenOfChild = await this.prisma.employee.findMany({
          where: { directManagerId: child.id },
        });
        result = [...result, ...childrenOfChild];
        if (childrenOfChild.length === 0) {
          return;
        } else {
          await this.childrenOfChild(childrenOfChild, result);
        }
      }),
    );
  }
}
