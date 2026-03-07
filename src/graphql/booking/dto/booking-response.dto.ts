import { ObjectType, Field } from '@nestjs/graphql';
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

/*@ObjectType()
export class BookingResponse {
    @Field(() => GraphQLBigInt)
    id: bigint;

   // @Field(() => GraphQLBigInt)
   // vendorId: bigint;

   // @Field(() => GraphQLBigInt)
   // customerId: bigint;

    @Field()
    bookingCode: string;

    @Field()
    bookingStatus: string;

    @Field()
    paymentStatus: string;

    @Field(() => Date)
    eventDate: string;

    @Field(() => CustomerResponse)
    user: CustomerResponse;

    @Field(() => VendorDetailResponse)
    vendor : VendorDetailResponse
}*/

@ObjectType()
export class CustomerBookingResponse {
    @Field()
    bookingCode: string;

    @Field()
    bookingStatus : string;
    
    @Field(() => Date)   
    eventDate: string; 

    @Field()
    guestCount: number; 
    
    @Field()
    location: string;

    @Field()
    paidAmount: number;

    @Field()
    fullAmount: number;

    @Field()
    paymentOption: string;

    @Field(() => VendorDetailResponse)
    vendor : VendorDetailResponse 

    @Field(() => CustomerResponse)
    user: CustomerResponse;
}


