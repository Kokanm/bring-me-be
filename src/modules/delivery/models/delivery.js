"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var type_graphql_1 = require("type-graphql");
var DeliveryType_enum_1 = require("../../../common/enums/DeliveryType.enum");
var Delivery = /** @class */ (function () {
    function Delivery() {
    }
    __decorate([
        type_graphql_1.Field(function (type) { return type_graphql_1.ID; })
    ], Delivery.prototype, "id");
    __decorate([
        type_graphql_1.Field()
    ], Delivery.prototype, "createdAt");
    __decorate([
        type_graphql_1.Field()
    ], Delivery.prototype, "updatedAt");
    __decorate([
        type_graphql_1.Field()
    ], Delivery.prototype, "item");
    __decorate([
        type_graphql_1.Field({ nullable: true })
    ], Delivery.prototype, "imageURL");
    __decorate([
        type_graphql_1.Field({ nullable: true })
    ], Delivery.prototype, "description");
    __decorate([
        type_graphql_1.Field({ nullable: true })
    ], Delivery.prototype, "locationFrom");
    __decorate([
        type_graphql_1.Field()
    ], Delivery.prototype, "locationTo");
    __decorate([
        type_graphql_1.Field({ nullable: true })
    ], Delivery.prototype, "deliverBy");
    __decorate([
        type_graphql_1.Field()
    ], Delivery.prototype, "accepted");
    __decorate([
        type_graphql_1.Field(function (type) { return DeliveryType_enum_1.DeliveryType; })
    ], Delivery.prototype, "type");
    Delivery = __decorate([
        type_graphql_1.ObjectType()
    ], Delivery);
    return Delivery;
}());
exports.Delivery = Delivery;
