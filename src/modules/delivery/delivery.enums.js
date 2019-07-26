"use strict";
exports.__esModule = true;
var type_graphql_1 = require("type-graphql");
var DeliveryType_enum_1 = require("../../common/enums/DeliveryType.enum");
function registerDeliveryTypeEnum() {
    return type_graphql_1.registerEnumType(DeliveryType_enum_1.DeliveryType, {
        name: 'DeliveryType',
        description: 'The type of the delivery. It can be "request" or "offer"'
    });
}
exports.registerDeliveryTypeEnum = registerDeliveryTypeEnum;
