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
var DeliveriesArgs = /** @class */ (function () {
    function DeliveriesArgs() {
        this.skip = 0;
        this.take = 25;
    }
    __decorate([
        type_graphql_1.Field(function (type) { return type_graphql_1.Int; }),
        class_validator_1.Min(0)
    ], DeliveriesArgs.prototype, "skip");
    __decorate([
        type_graphql_1.Field(function (type) { return type_graphql_1.Int; }),
        class_validator_1.Min(1),
        class_validator_1.Max(50)
    ], DeliveriesArgs.prototype, "take");
    DeliveriesArgs = __decorate([
        type_graphql_1.ArgsType()
    ], DeliveriesArgs);
    return DeliveriesArgs;
}());
exports.DeliveriesArgs = DeliveriesArgs;
