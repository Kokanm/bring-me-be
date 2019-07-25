import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'bringme',
    protoPath: join(__dirname, './modules/bringme.proto'),
  },
};
