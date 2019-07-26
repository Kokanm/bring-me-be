"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var class_validator_1 = require("class-validator");
var type_graphql_1 = require("type-graphql");
var DeliveryType_enum_1 = require("../../../common/enums/DeliveryType.enum");
var NewDeliveryInput = /** @class */ (function () {
    function NewDeliveryInput() {
    }
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.Length(1, 100)
    ], NewDeliveryInput.prototype, "item");
    __decorate([
        type_graphql_1.Field({ nullable: true }),
        class_validator_1.IsOptional()
    ], NewDeliveryInput.prototype, "imageURL");
    __decorate([
        type_graphql_1.Field({ nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.MaxLength(500)
    ], NewDeliveryInput.prototype, "description");
    __decorate([
        type_graphql_1.Field({ nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.MaxLength(100)
    ], NewDeliveryInput.prototype, "locationFrom");
    __decorate([
        type_graphql_1.Field(),
        class_validator_1.MaxLength(100)
    ], NewDeliveryInput.prototype, "locationTo");
    __decorate([
        type_graphql_1.Field(function (type) { return Date; }, { nullable: true }),
        class_validator_1.IsOptional()
    ], NewDeliveryInput.prototype, "deliverBy");
    __decorate([
        type_graphql_1.Field(function (type) { return DeliveryType_enum_1.DeliveryType; })
    ], NewDeliveryInput.prototype, "type");
    NewDeliveryInput = __decorate([
        type_graphql_1.InputType()
    ], NewDeliveryInput);
    return NewDeliveryInput;
}());
exports.NewDeliveryInput = NewDeliveryInput;
