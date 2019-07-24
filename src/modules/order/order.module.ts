import { Module } from '@nestjs/common';
import { OrderRepositoryProvider } from './order.repository';

@Module({
  providers: [OrderRepositoryProvider],
  exports: [OrderRepositoryProvider],
})
export class OrderModule {}
