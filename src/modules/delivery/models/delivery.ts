import { ObjectType, Field, ID } from 'type-graphql';
import { DeliveryType } from '../../../common/enums/DeliveryType.enum';

@ObjectType()
export class Delivery {
  @Field(type => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  item: string;

  @Field({ nullable: true })
  imageURL?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  locationFrom?: string;

  @Field()
  locationTo: string;

  @Field({ nullable: true })
  deliverBy?: Date;

  @Field()
  accepted: boolean;

  @Field(type => DeliveryType)
  type: DeliveryType;
}
