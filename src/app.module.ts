import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        autoSchemaFile: 'schema.gql',
      }),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASS,
        database: process.env.POSTGRES_NAME,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    UserModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
