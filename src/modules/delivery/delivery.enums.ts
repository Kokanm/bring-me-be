import { registerEnumType } from 'type-graphql';
import { DeliveryType } from '../../common/enums/DeliveryType.enum';

export function registerDeliveryTypeEnum() {
  return registerEnumType(DeliveryType, {
    name: 'DeliveryType',
    description: 'The type of the delivery. It can be "request" or "offer"',
  });
}
