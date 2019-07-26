import { OnModuleInit, Injectable } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { grpcClientOptions } from '../../grpc-client.options';
import { Delivery } from './models/delivery';
import { DeliveriesArgs } from './dto/deliveries.args';
import { NewDeliveryInput } from './dto/new-delivery.input';

interface DeliveryService {
  findOne(idDto: { id: string }): Observable<Delivery>;
  findAll(
    deliveriesArgs: DeliveriesArgs,
  ): Observable<{ deliveries: Delivery[] }>;
  create(newDeliveryInput: NewDeliveryInput): Observable<Delivery>;
}

@Injectable()
export class DeliveryRpc implements OnModuleInit {
  @Client(grpcClientOptions)
  private readonly client: ClientGrpc;

  private deliveryService: DeliveryService;

  onModuleInit() {
    this.deliveryService = this.client.getService<DeliveryService>(
      'DeliveryService',
    );
  }

  async findOne(id: string): Promise<Delivery> {
    const delivery = await this.deliveryService.findOne({ id }).toPromise();
    return delivery;
  }

  async findAll(deliveriesArgs: DeliveriesArgs): Promise<Delivery[]> {
    console.warn('RPC');
    console.warn(deliveriesArgs);
    console.warn('adadam');
    console.warn(process.env.NODE_ENV);
    const { deliveries } = await this.deliveryService
      .findAll(deliveriesArgs)
      .toPromise();
    return deliveries;
  }

  async create(newDeliveryInput: NewDeliveryInput): Promise<Delivery> {
    const newDelivery = await this.deliveryService
      .create(newDeliveryInput)
      .toPromise();
    return newDelivery;
  }
}
