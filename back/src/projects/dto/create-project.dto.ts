export class CreateProjectDto {
  name: string;
  description: string;
  duration: string;
  clientId: string;
  teamId: string;
  projectManagerId: string;
  consultantId: string;
  startAt: Date;
  endAt: Date;
}
