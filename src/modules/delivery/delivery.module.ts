import { Module } from '@nestjs/common';
import { DeliveryRepositoryProvider } from './delivery.repository';
import { DeliveryResolver } from './delivery.resolver';
import { DeliveryService } from './delivery.service';
import { DateScalar } from '../../common/scalars/date.scalar';

@Module({
  providers: [
    DeliveryResolver,
    DeliveryService,
    DeliveryRepositoryProvider,
    DateScalar,
  ],
})
export class DeliveryModule {}
