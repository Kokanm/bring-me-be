import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewDeliveryInput } from './dto/new-delivery.input';
import { DeliveriesArgs } from './dto/deliveries.args';
import { Delivery } from './models/delivery';
import { DeliveryService } from './delivery.service';
import { registerDeliveryTypeEnum } from './delivery.enums';

registerDeliveryTypeEnum();

@Resolver(of => Delivery)
export class DeliveryResolver {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Query(returns => Delivery, { name: 'delivery' })
  async getDelivery(@Args('id') id: string): Promise<Delivery> {
    const delivery = await this.deliveryService.findOneById(id);

    if (!delivery) {
      throw new NotFoundException(id);
    }

    return delivery;
  }

  @Query(returns => [Delivery], { name: 'deliveries' })
  getDeliveries(@Args() deliveriesArgs: DeliveriesArgs): Promise<Delivery[]> {
    return this.deliveryService.findAll(deliveriesArgs);
  }

  @Mutation(returns => Delivery)
  async addDelivery(
    @Args('newDeliveryData') newDeliveryData: NewDeliveryInput,
  ): Promise<Delivery> {
    const delivery = await this.deliveryService.create(newDeliveryData);
    return delivery;
  }
}
