import { Order } from '../../entities/order.entity';
import { EntityRepository, Repository, Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {}

export const OrderRepositoryProvider = {
  provide: 'OrderRepository',
  useFactory: (connection: Connection) =>
    connection.getCustomRepository(OrderRepository),
  inject: [Connection],
};
