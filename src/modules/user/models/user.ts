import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @Field(type => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
