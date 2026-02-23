import { ObjectType, Field, FIELD_RESOLVER_MIDDLEWARE_METADATA } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { VendorDetailResponse } from 'src/graphql/vendor/dto/vendor-response.dto';



@ObjectType()
export class CustomerResponse {
    @Field(() => GraphQLBigInt)
    id: bigint;

    @Field()
    name: string;

    @Field()
    phone: string;

    @Field()
    email: string;
}

@ObjectType()
export class BookingResponse {
    @Field(() => GraphQLBigInt)
    id: bigint;

    @Field(() => GraphQLBigInt)
    vendorId: bigint;

    @Field(() => GraphQLBigInt)
    customerId: bigint;

    @Field(() => Date)
    scheduledAt: string;

    @Field()
    advancePaid: Number;

    @Field()
    trackingCode: string;

    @Field(() => Date)
    createdAt: string;

    @Field(() => Date)
    updatedAt: string;

    @Field()
    amount: number;

    @Field()
    bookingCode: string;

    @Field()
    bookingStatus: string;

    @Field()
    paymentStatus: string;

    @Field(() => Date)
    serviceDate: string;

    @Field()
    serviceType: string;

    @Field(() => CustomerResponse)
    user: CustomerResponse;

    @Field(() => VendorDetailResponse)
    vendor : VendorDetailResponse
}


