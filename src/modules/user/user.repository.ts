import { User } from '../../entities/user.entity';
import { EntityRepository, Repository, Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
@EntityRepository(User)
export class UserRepository extends Repository<User> {}

export const UserRepositoryProvider = {
  provide: 'UserRepository',
  useFactory: (connection: Connection) =>
    connection.getCustomRepository(UserRepository),
  inject: [Connection],
};
