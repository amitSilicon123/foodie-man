import { ObjectType, Field, FIELD_RESOLVER_MIDDLEWARE_METADATA } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';


@ObjectType()
export class CreateBookingInput {
    @Field()
    eventDate: string;

    @Field()
    guestCount: string;

    @Field()
    location: string;

    @Field()
    description: string;

    @Field()
    paidAmount: boolean;

    @Field()
    fullAmount: boolean;

    @Field()
    paymentOption: string;
}
