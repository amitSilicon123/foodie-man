import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';


@ObjectType()
export class CategoryResponse {
    @Field()
    id: Number;

    @Field()
    name: string;

    @Field()
    slug: string;

    @Field()
    iconUrl: string;

    @Field()
    isActive: boolean;

}