import { ObjectType, Field, ID } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';



@ObjectType()
export class UserResponse {
  @Field(() => GraphQLBigInt)
  id: bigint;

  @Field()
  name: string;

  @Field()
  phone: string;

  @Field()
  email: string;

  @Field()
  role: string;

  @Field()
  accountStatus: string;

  @Field()
  operationalStatus: string;

  @Field(() => Date)
  createdAt: Date;

}

@ObjectType()
export class VendorDetailResponse {
  @Field(() => GraphQLBigInt)
  id: bigint

  @Field(() => GraphQLBigInt)
  userId: bigint;

  @Field()
  shopName : string;

  @Field()
  description: string;

  @Field()
  categoryId: string;

  @Field()
  lat: number;

  @Field()
  lng: number;

  @Field()
  address: string;

  @Field()
  varified: boolean;
  
  @Field()
  avgRating: number;

  @Field(() =>  UserResponse, {nullable : true})
  user? : UserResponse;
}


@ObjectType()
export class VendorResponse {
  @Field(() => GraphQLBigInt)
  id: bigint;

  @Field()
  name: string;

  @Field()
  phone: string;

  @Field()
  email: string;

  @Field()
  role: string;

  @Field()
  accountStatus: string;

  @Field()
  operationalStatus: string;

  @Field()
  createdAt: Date;

  @Field(() => VendorDetailResponse, { nullable: true })
  vendor?: VendorDetailResponse;

}


@ObjectType()
export class InfluencerResponses{
  @Field(() => GraphQLBigInt)
  id: bigint

  @Field(() => GraphQLBigInt)
  userId: bigint

  @Field()
  category: string
  
  @Field()
  followersCount: string 

  @Field()
  socialProfileUrl: string

  @Field()
  verified: string

  @Field()
  verificationSource: string

  @Field(() => UserResponse, {nullable: true})
  user : UserResponse
}

@ObjectType()
export class VendorInfoResponse {
  @Field(() => GraphQLBigInt)
  id: bigint

  @Field(() => GraphQLBigInt)
  userId: bigint;

  @Field()
  shopName : string;

  @Field()
  description: string;

  @Field()
  categoryId: string;

  @Field()
  lat: number;

  @Field()
  lng: number;

  @Field()
  address: string;

  @Field()
  varified: boolean;
  
  @Field()
  avgRating: number;

  @Field(() =>  UserResponse, {nullable : true})
  user? : UserResponse;
}

@ObjectType()
export class TrendingVendorResponse {
  @Field(() => GraphQLBigInt)
  id: bigint

  @Field(() => GraphQLBigInt)
  vendorId: bigint;

  @Field(() => GraphQLBigInt)
  influencerId : bigint;

  @Field()
  rating: number;

  @Field()
  mediaType: string;

  @Field()
  mediaUrl: string;

  @Field()
  moderationStatus: string;

  @Field(() => VendorInfoResponse, {nullable : true})
  vendor?:VendorInfoResponse

  @Field(() => InfluencerResponses, {nullable:true})
  influencer?: InfluencerResponses
}


@ObjectType()
export class FavoriteVendorResponse {
  @Field(() => GraphQLBigInt)
  id: bigint

  @Field(() => GraphQLBigInt)
  customerId: bigint;

  @Field(() => GraphQLBigInt)
  vendorId: bigint;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => VendorInfoResponse, {nullable : true})
  vendor?: VendorInfoResponse;

  @Field(() => UserResponse, {nullable : true})
  customer?: UserResponse;
}

@ObjectType() 
  export class CreateFavoriteVendorResponse {
  @Field(() => GraphQLBigInt)
  id: bigint
    
  @Field(() => VendorInfoResponse, {nullable : true})
  vendor?:VendorInfoResponse
}