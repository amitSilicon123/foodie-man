import { ObjectType } from '@nestjs/graphql';
import { createGqlResponse } from '../../gql-response.wrapper';
import { createGqlListResponse } from '../../gql-list-response.wrapper';
import { CustomerBookingResponse , BookingResponse } from './booking-response.dto';


@ObjectType()
export class BookingResponseWrapper extends createGqlResponse(BookingResponse ) {}

@ObjectType()
export class CustomerBookingResponseWrapper extends createGqlListResponse(CustomerBookingResponse ) {}
