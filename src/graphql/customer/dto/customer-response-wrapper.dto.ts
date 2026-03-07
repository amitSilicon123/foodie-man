import { ObjectType } from '@nestjs/graphql';
import { createGqlResponse } from '../../gql-response.wrapper';
import { createGqlListResponse } from '../../gql-list-response.wrapper';
import { CustomerInfoResponse } from './customer-response.dto';


@ObjectType()
export class CustomerResponseWrapper extends createGqlListResponse(CustomerInfoResponse ) {}

