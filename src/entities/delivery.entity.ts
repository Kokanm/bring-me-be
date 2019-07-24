import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  PrimaryColumn,
  Generated,
} from 'typeorm';
import { DeliveryType } from '../common/enums/DeliveryType.enum';

@Entity()
export class Delivery {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  item: string;

  @Column({ nullable: true })
  imageURL?: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  locationFrom?: string;

  @Column()
  locationTo: string;

  @Column({ nullable: true })
  deliverBy?: Date;

  @Column({ default: false })
  accepted: boolean;

  @Column({ type: 'enum', enum: DeliveryType })
  type: DeliveryType;
}
