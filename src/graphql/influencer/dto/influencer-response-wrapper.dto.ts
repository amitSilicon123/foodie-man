import { ObjectType } from '@nestjs/graphql';
import { createGqlResponse } from '../../gql-response.wrapper';
import { InfluencerResponse  } from './influencer-response.dto';

@ObjectType()
export class InfluencerResponseWrapper extends createGqlResponse(InfluencerResponse ) {}

