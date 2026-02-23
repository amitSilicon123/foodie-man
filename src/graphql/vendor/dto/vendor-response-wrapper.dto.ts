import { ObjectType } from '@nestjs/graphql';
import { createGqlResponse } from '../../gql-response.wrapper';
import { createGqlListResponse } from '../../gql-list-response.wrapper';
import { VendorResponse, TrendingVendorResponse } from './vendor-response.dto';


@ObjectType()
export class VendorResponseWrapper extends createGqlResponse(VendorResponse) {}


@ObjectType()
export class SingleVendorResponse extends createGqlListResponse(VendorResponse) {}


@ObjectType()
export class TrendingVendorResponseWrapper extends createGqlResponse(TrendingVendorResponse) {}