import { ObjectType } from '@nestjs/graphql';
import { createGqlResponse } from '../../gql-response.wrapper';
import { createGqlListResponse } from '../../gql-list-response.wrapper';
import { VendorResponse, TrendingVendorResponse, FavoriteVendorResponse , CreateFavoriteVendorResponse} from './vendor-response.dto';


@ObjectType()
export class VendorResponseWrapper extends createGqlResponse(VendorResponse) {}


@ObjectType()
export class SingleVendorResponse extends createGqlListResponse(VendorResponse) {}


@ObjectType()
export class TrendingVendorResponseWrapper extends createGqlResponse(TrendingVendorResponse) {}



@ObjectType()
export class FavoriteVendorResponseWrapper extends createGqlResponse(FavoriteVendorResponse) {}

@ObjectType()
export class CreateFavoriteVendorResponseWrapper extends createGqlListResponse(CreateFavoriteVendorResponse) {}