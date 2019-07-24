import { Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class NewUserInput {
  @Field()
  @Length(1, 50)
  firstName: string;

  @Field()
  @Length(1, 50)
  lastName: string;
}
