"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var delivery_repository_1 = require("./delivery.repository");
var delivery_service_1 = require("./delivery.service");
var date_scalar_1 = require("../../common/scalars/date.scalar");
var delivery_resolver_1 = require("./delivery.resolver");
var delivery_controller_1 = require("./delivery.controller");
var delivery_rpc_service_1 = require("./delivery-rpc.service");
var DeliveryModule = /** @class */ (function () {
    function DeliveryModule() {
    }
    DeliveryModule = __decorate([
        common_1.Module({
            controllers: [delivery_controller_1.DeliveryController],
            providers: [
                delivery_resolver_1.DeliveryResolver,
                delivery_rpc_service_1.DeliveryRpc,
                delivery_service_1.DeliveryService,
                delivery_repository_1.DeliveryRepositoryProvider,
                date_scalar_1.DateScalar,
            ]
        })
    ], DeliveryModule);
    return DeliveryModule;
}());
exports.DeliveryModule = DeliveryModule;
