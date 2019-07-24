import { Delivery } from '../../entities/delivery.entity';
import { EntityRepository, Repository, Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
@EntityRepository(Delivery)
export class DeliveryRepository extends Repository<Delivery> {}

export const DeliveryRepositoryProvider = {
  provide: 'DeliveryRepository',
  useFactory: (connection: Connection) =>
    connection.getCustomRepository(DeliveryRepository),
  inject: [Connection],
};
