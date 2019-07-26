"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var graphql_1 = require("@nestjs/graphql");
var delivery_1 = require("./models/delivery");
var delivery_enums_1 = require("./delivery.enums");
delivery_enums_1.registerDeliveryTypeEnum();
var DeliveryResolver = /** @class */ (function () {
    function DeliveryResolver(deliveryRpc) {
        this.deliveryRpc = deliveryRpc;
    }
    DeliveryResolver.prototype.getDelivery = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var delivery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deliveryRpc.findOne(id)];
                    case 1:
                        delivery = _a.sent();
                        if (!delivery) {
                            throw new common_1.NotFoundException(id);
                        }
                        return [2 /*return*/, delivery];
                }
            });
        });
    };
    DeliveryResolver.prototype.getDeliveries = function (deliveriesArgs) {
        return this.deliveryRpc.findAll(deliveriesArgs);
    };
    DeliveryResolver.prototype.addDelivery = function (newDeliveryData) {
        return __awaiter(this, void 0, void 0, function () {
            var delivery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deliveryRpc.create(newDeliveryData)];
                    case 1:
                        delivery = _a.sent();
                        return [2 /*return*/, delivery];
                }
            });
        });
    };
    __decorate([
        graphql_1.Query(function (returns) { return delivery_1.Delivery; }, { name: 'delivery' }),
        __param(0, graphql_1.Args('id'))
    ], DeliveryResolver.prototype, "getDelivery");
    __decorate([
        graphql_1.Query(function (returns) { return [delivery_1.Delivery]; }, { name: 'deliveries' }),
        __param(0, graphql_1.Args())
    ], DeliveryResolver.prototype, "getDeliveries");
    __decorate([
        graphql_1.Mutation(function (returns) { return delivery_1.Delivery; }),
        __param(0, graphql_1.Args('newDeliveryData'))
    ], DeliveryResolver.prototype, "addDelivery");
    DeliveryResolver = __decorate([
        graphql_1.Resolver(function (of) { return delivery_1.Delivery; })
    ], DeliveryResolver);
    return DeliveryResolver;
}());
exports.DeliveryResolver = DeliveryResolver;
