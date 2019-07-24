import { Module } from '@nestjs/common';
import { UserRepositoryProvider } from './user.repository';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserRepositoryProvider],
  exports: [UserRepositoryProvider],
})
export class UserModule {}
