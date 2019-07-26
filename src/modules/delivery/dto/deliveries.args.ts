import { Max, IsOptional, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';
import { DeliveryType } from '../../../common/enums/DeliveryType.enum';

@ArgsType()
export class DeliveriesArgs {
  @Field(type => Int, { nullable: true })
  @IsOptional()
  @Min(0)
  skip?: number;

  @Field(type => Int, { nullable: true })
  @IsOptional()
  @Min(1)
  @Max(100)
  take?: number;

  @Field(type => DeliveryType, { nullable: true })
  @IsOptional()
  type?: DeliveryType;
}
