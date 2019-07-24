import { Injectable } from '@nestjs/common';
import { NewUserInput } from './dto/new-user.input';
import { UsersArgs } from './dto/users.args';
import { User } from './models/user';

@Injectable()
export class UserService {
  async create(data: NewUserInput): Promise<User> {
    return {
      id: '555',
      createdAt: new Date(),
      updatedAt: new Date(),
      ...data,
    };
  }

  async findOneById(id: string): Promise<User> {
    return {
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      firstName: 'Kole',
      lastName: 'Banka',
    } as any;
  }

  async findAll(usersArgs: UsersArgs): Promise<User[]> {
    return [
      {
        id: '123144141',
        createdAt: new Date(),
        updatedAt: new Date(),
        firstName: 'Kole',
        lastName: 'Banka',
      },
      {
        id: 'avavsavsdv',
        createdAt: new Date(),
        updatedAt: new Date(),
        firstName: 'Made',
        lastName: 'Golo',
      },
    ] as User[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
