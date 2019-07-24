import { Injectable } from '@nestjs/common';
import { NewDeliveryInput } from './dto/new-delivery.input';
import { DeliveriesArgs } from './dto/deliveries.args';
import { Delivery } from './models/delivery';
import { DeliveryRepository } from './delivery.repository';

@Injectable()
export class DeliveryService {
  constructor(private readonly deliveryRepository: DeliveryRepository) {}

  async create(data: NewDeliveryInput): Promise<Delivery> {
    const delivery = await this.deliveryRepository.save(data);
    return delivery;
  }

  async findOneById(id: string): Promise<Delivery> {
    const delivery = await this.deliveryRepository.findOne(id);
    return delivery;
  }

  async findAll(deliveriesArgs: DeliveriesArgs): Promise<Delivery[]> {
    const deliveries = await this.deliveryRepository.find({
      ...deliveriesArgs,
    });
    return deliveries;
  }
}
