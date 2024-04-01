export class Delivery {
  id: number;
  owner: string;
  week: number;
  firstTeammateName?: string;
  secondTeammateName?: string;
  frontRepoUrl?: string;
  frontProductionUrl?: string;
  backRepoUrl?: string;
  backtProductionUrl?: string;
  createdAt: Date;
}
