import { ObjectType } from '@nestjs/graphql';
import { createGqlResponse } from '../../gql-response.wrapper';
import { BookingResponse  } from './booking-response.dto';


@ObjectType()
export class BookingResponseWrapper extends createGqlResponse(BookingResponse ) {}


