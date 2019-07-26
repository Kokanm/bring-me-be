import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { IdDto } from '../../common/dto/id';
import { User } from './models/user';
import { UserService } from './user.service';
import { UsersArgs } from './dto/users.args';
import { NewUserInput } from './dto/new-user.input';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'FindOne')
  async findOne({ id }: IdDto): Promise<User> {
    const user = await this.userService.findOneById(id);
    return user;
  }

  @GrpcMethod('UserService', 'FindAll')
  async findAll(usersArgs: UsersArgs): Promise<{ users: User[] }> {
    const users = await this.userService.findAll(usersArgs);
    return { users };
  }

  @GrpcMethod('UserService', 'Create')
  async create(newUserInput: NewUserInput): Promise<User> {
    const user = await this.userService.create(newUserInput);
    return user;
  }
}
