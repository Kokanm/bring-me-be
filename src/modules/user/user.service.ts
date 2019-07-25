import { Injectable } from '@nestjs/common';
import { NewUserInput } from './dto/new-user.input';
import { UsersArgs } from './dto/users.args';
import { UserRepository } from './user.repository';
import { User } from './models/user';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findOneById(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);
    return user;
  }

  async findAll(usersArgs: UsersArgs): Promise<User[]> {
    const users = await this.userRepository.find({ ...usersArgs });
    return users;
  }

  async create(data: NewUserInput): Promise<User> {
    const user = await this.userRepository.save(data);
    return user;
  }
}
