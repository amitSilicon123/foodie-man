import { ObjectType, Field } from '@nestjs/graphql';


export function createGqlListResponse<T>(TClass: new () => T) {
  @ObjectType({ isAbstract: true })
  abstract class GqlResponse {
    @Field(() => Boolean)
    success: boolean;

    @Field(() => String)
    message: string;

    @Field(() => TClass, { nullable: true })
    data?: T;


    @Field(() => [String], { nullable: true })
    errors?: string[];
  }

  return GqlResponse;
}
