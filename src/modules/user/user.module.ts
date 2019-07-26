import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepositoryProvider } from './user.repository';
import { UserController } from './user.controller';
import { DateScalar } from '../../common/scalars/date.scalar';
import { UserResolver } from './user.resolver';
import { UserRpc } from './user-rpc.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    UserRpc,
    UserResolver,
    UserRepositoryProvider,
    DateScalar,
  ],
})
export class UserModule {}
