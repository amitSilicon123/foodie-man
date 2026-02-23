import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class InfluencerDetailResponse {
  @Field(() => GraphQLBigInt)
  id: bigint

  @Field(() => GraphQLBigInt)
  userId: bigint;

  @Field()
  category: string;

  @Field()
  followersCount: number;

  @Field()
  socialProfileUrl: string;

  @Field()
  verificationSource: string;
}


@ObjectType()
export class InfluencerResponse  {
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

  @Field(() => InfluencerDetailResponse, { nullable: true })
  influencer ?: InfluencerDetailResponse;

}
