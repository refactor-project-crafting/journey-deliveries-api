import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("deliveries")
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  owner: string;

  @Column({
    type: "int2",
  })
  week: number;

  @Column({
    nullable: true,
  })
  firstTeammateName?: string;

  @Column({
    nullable: true,
  })
  secondTeammateName?: string;

  @Column({
    nullable: true,
  })
  frontRepoUrl?: string;

  @Column({
    nullable: true,
  })
  frontProductionUrl?: string;

  @Column({
    nullable: true,
  })
  backRepoUrl?: string;

  @Column({
    nullable: true,
  })
  backtProductionUrl?: string;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;
}
