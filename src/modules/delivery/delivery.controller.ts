import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { IdDto } from '../../common/dto/id';
import { Delivery } from './models/delivery';
import { DeliveryService } from './delivery.service';
import { DeliveriesArgs } from './dto/deliveries.args';
import { NewDeliveryInput } from './dto/new-delivery.input';

@Controller()
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @GrpcMethod('DeliveryService', 'FindOne')
  async findOne({ id }: IdDto): Promise<Delivery> {
    const delivery = await this.deliveryService.findOneById(id);
    return delivery;
  }

  @GrpcMethod('DeliveryService', 'FindAll')
  async findAll(
    deliveriesArgs: DeliveriesArgs,
  ): Promise<{ deliveries: Delivery[] }> {
    const deliveries = await this.deliveryService.findAll(deliveriesArgs);
    return { deliveries };
  }

  @GrpcMethod('DeliveryService', 'Create')
  async create(newDeliveryInput: NewDeliveryInput): Promise<Delivery> {
    const delivery = await this.deliveryService.create(newDeliveryInput);
    return delivery;
  }
}
