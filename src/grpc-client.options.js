"use strict";
exports.__esModule = true;
var microservices_1 = require("@nestjs/microservices");
var path_1 = require("path");
exports.grpcClientOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: '0.0.0.0:5000',
        package: 'bringme',
        protoPath: path_1.join(__dirname, 'protos/bringme.proto')
    }
};
