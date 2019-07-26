import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewDeliveryInput } from './dto/new-delivery.input';
import { DeliveriesArgs } from './dto/deliveries.args';
import { Delivery } from './models/delivery';
import { registerDeliveryTypeEnum } from './delivery.enums';
import { DeliveryRpc } from './delivery-rpc.service';

registerDeliveryTypeEnum();

@Resolver(of => Delivery)
export class DeliveryResolver {
  constructor(private readonly deliveryRpc: DeliveryRpc) {}

  @Query(returns => Delivery, { name: 'delivery' })
  async getDelivery(@Args('id') id: string): Promise<Delivery> {
    const delivery = await this.deliveryRpc.findOne(id);

    if (!delivery) {
      throw new NotFoundException(id);
    }

    return delivery;
  }

  @Query(returns => [Delivery], { name: 'deliveries' })
  getDeliveries(@Args() deliveriesArgs: DeliveriesArgs): Promise<Delivery[]> {
    console.warn('Resolver');
    console.warn(deliveriesArgs);
    return this.deliveryRpc.findAll(deliveriesArgs);
  }

  @Mutation(returns => Delivery)
  async addDelivery(
    @Args('newDeliveryData') newDeliveryData: NewDeliveryInput,
  ): Promise<Delivery> {
    const delivery = await this.deliveryRpc.create(newDeliveryData);
    return delivery;
  }
}
