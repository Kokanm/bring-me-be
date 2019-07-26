"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var graphql_1 = require("@nestjs/graphql");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var user_module_1 = require("./modules/user/user.module");
var delivery_module_1 = require("./modules/delivery/delivery.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forRootAsync({
                    useFactory: function () { return ({
                        type: 'postgres',
                        host: 'postgres',
                        port: 5432,
                        username: 'user',
                        password: 'pass',
                        database: 'bringme',
                        entities: [__dirname + '/**/*.entity{.ts,.js}'],
                        synchronize: true
                    }); }
                }),
                user_module_1.UserModule,
                delivery_module_1.DeliveryModule,
                graphql_1.GraphQLModule.forRootAsync({
                    useFactory: function () { return ({
                        autoSchemaFile: 'schema.gql'
                    }); }
                }),
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
