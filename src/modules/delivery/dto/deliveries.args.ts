import { Max, IsOptional } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';
import { DeliveryType } from '../../../common/enums/DeliveryType.enum';

@ArgsType()
export class DeliveriesArgs {
  @Field(type => Int)
  @IsOptional()
  skip?: number;

  @Field(type => Int)
  @IsOptional()
  @Max(100)
  take?: number;

  @Field(type => DeliveryType)
  @IsOptional()
  type?: DeliveryType;
}
