import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: false })
  item: string;

  @Column()
  imageURL?: string;

  @Column()
  description?: string;

  @Column()
  locationFrom?: string;

  @Column({ nullable: false })
  locationTo: string;

  @Column()
  date?: Date;

  @Column()
  atTheLatestDate?: Date;

  @Column({ nullable: false, default: false })
  status: boolean;
}
