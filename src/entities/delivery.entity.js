"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var DeliveryType_enum_1 = require("../common/enums/DeliveryType.enum");
var Delivery = /** @class */ (function () {
    function Delivery() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        typeorm_1.Generated('uuid')
    ], Delivery.prototype, "id");
    __decorate([
        typeorm_1.CreateDateColumn()
    ], Delivery.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn()
    ], Delivery.prototype, "updatedAt");
    __decorate([
        typeorm_1.Column()
    ], Delivery.prototype, "item");
    __decorate([
        typeorm_1.Column({ nullable: true })
    ], Delivery.prototype, "imageURL");
    __decorate([
        typeorm_1.Column({ nullable: true })
    ], Delivery.prototype, "description");
    __decorate([
        typeorm_1.Column({ nullable: true })
    ], Delivery.prototype, "locationFrom");
    __decorate([
        typeorm_1.Column()
    ], Delivery.prototype, "locationTo");
    __decorate([
        typeorm_1.Column({ nullable: true })
    ], Delivery.prototype, "deliverBy");
    __decorate([
        typeorm_1.Column({ "default": false })
    ], Delivery.prototype, "accepted");
    __decorate([
        typeorm_1.Column({ type: 'enum', "enum": DeliveryType_enum_1.DeliveryType })
    ], Delivery.prototype, "type");
    Delivery = __decorate([
        typeorm_1.Entity()
    ], Delivery);
    return Delivery;
}());
exports.Delivery = Delivery;
