import { OnModuleInit, Injectable } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { grpcClientOptions } from '../../grpc-client.options';
import { User } from './models/user';
import { UsersArgs } from './dto/users.args';
import { NewUserInput } from './dto/new-user.input';

interface UserService {
  findOne(idDto: { id: string }): Observable<User>;
  findAll(usersArgs: UsersArgs): Observable<{ users: User[] }>;
  create(newUserInput: NewUserInput): Observable<User>;
}

@Injectable()
export class UserRpc implements OnModuleInit {
  @Client(grpcClientOptions)
  private readonly client: ClientGrpc;

  private userService: UserService;

  onModuleInit() {
    this.userService = this.client.getService<UserService>('UserService');
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userService.findOne({ id }).toPromise();
    return user;
  }

  async findAll(usersArgs: UsersArgs): Promise<User[]> {
    const { users } = await this.userService.findAll(usersArgs).toPromise();
    return users;
  }

  async create(newUserInput: NewUserInput): Promise<User> {
    const newUser = await this.userService.create(newUserInput).toPromise();
    return newUser;
  }
}
