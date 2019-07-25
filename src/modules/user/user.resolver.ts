import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewUserInput } from './dto/new-user.input';
import { UsersArgs } from './dto/users.args';
import { User } from './models/user';
import { UserRpc } from './user-rpc.service';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userRpc: UserRpc) {}

  @Query(returns => User, { name: 'user' })
  async getUser(@Args('id') id: string): Promise<User> {
    const user = await this.userRpc.findOne(id);

    if (!user) {
      throw new NotFoundException(id);
    }

    return user;
  }

  @Query(returns => [User], { name: 'users' })
  async getUsers(@Args() usersArgs: UsersArgs): Promise<User[]> {
    const users = await this.userRpc.findAll(usersArgs);
    return users;
  }

  @Mutation(returns => User)
  async addUser(@Args('newUserData') newUserData: NewUserInput): Promise<User> {
    const user = await this.userRpc.create(newUserData);
    return user;
  }
}
