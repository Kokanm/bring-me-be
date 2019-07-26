"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var type_graphql_1 = require("type-graphql");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        type_graphql_1.Field(function (type) { return type_graphql_1.ID; })
    ], User.prototype, "id");
    __decorate([
        type_graphql_1.Field()
    ], User.prototype, "createdAt");
    __decorate([
        type_graphql_1.Field()
    ], User.prototype, "updatedAt");
    __decorate([
        type_graphql_1.Field()
    ], User.prototype, "firstName");
    __decorate([
        type_graphql_1.Field()
    ], User.prototype, "lastName");
    User = __decorate([
        type_graphql_1.ObjectType()
    ], User);
    return User;
}());
exports.User = User;
