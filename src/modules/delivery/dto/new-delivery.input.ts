import { Length, IsOptional, MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { DeliveryType } from '../../../common/enums/DeliveryType.enum';

@InputType()
export class NewDeliveryInput {
  @Field()
  @Length(1, 100)
  item: string;

  @Field({ nullable: true })
  @IsOptional()
  imageURL: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(500)
  description: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(100)
  locationFrom: string;

  @Field()
  @MaxLength(100)
  locationTo: string;

  @Field(type => Date, { nullable: true })
  @IsOptional()
  deliverBy: Date;

  @Field(type => DeliveryType)
  type: DeliveryType;
}
