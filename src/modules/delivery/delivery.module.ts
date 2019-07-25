import { Module } from '@nestjs/common';
import { DeliveryRepositoryProvider } from './delivery.repository';
import { DeliveryService } from './delivery.service';
import { DateScalar } from '../../common/scalars/date.scalar';
import { DeliveryResolver } from './delivery.resolver';
import { DeliveryController } from './delivery.controller';
import { DeliveryRpc } from './delivery-rpc.service';

@Module({
  controllers: [DeliveryController],
  providers: [
    DeliveryResolver,
    DeliveryRpc,
    DeliveryService,
    DeliveryRepositoryProvider,
    DateScalar,
  ],
})
export class DeliveryModule {}
