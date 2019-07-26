import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql';

@Scalar('Date', type => Date)
export class DateScalar implements CustomScalar<string, any> {
  description = 'Date custom scalar type';

  parseValue(value: string): Date {
    return new Date(Number(value));
  }

  serialize(value: string): string {
    return Date.parse(value).toString();
  }

  parseLiteral(ast: any): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }
}
