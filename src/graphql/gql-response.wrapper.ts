import { ObjectType, Field } from '@nestjs/graphql';
import { VendorResponse } from './vendor/dto/vendor-response.dto';

export function createGqlResponse<T>(TClass: new () => T) {
  @ObjectType({ isAbstract: true })
  abstract class GqlResponse {
    @Field(() => Boolean)
    success: boolean;

    @Field(() => String)
    message: string;

    @Field(() => [TClass], { nullable: true })
    data?: T[];


    @Field(() => [String], { nullable: true })
    errors?: string[];
  }

  return GqlResponse;
}
