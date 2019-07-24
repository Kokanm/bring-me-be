import { Module } from '@nestjs/common';
import { DateScalar } from '../../common/scalars/date.scalar';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserRepositoryProvider } from './user.repository';

@Module({
  providers: [UserResolver, UserService, UserRepositoryProvider, DateScalar],
})
export class UserModule {}
