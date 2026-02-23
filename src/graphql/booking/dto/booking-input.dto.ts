import { ObjectType, InputType, Field } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';


@InputType()
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
