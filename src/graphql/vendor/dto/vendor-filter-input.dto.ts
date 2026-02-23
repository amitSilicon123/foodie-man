
import { ObjectType, Field, InputType, Float, Int, ArgsType  } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';


@InputType() // 🔥 THIS IS MANDATORY
//@ArgsType()
export class VendorFilterInput {

    @Field(() => Int, { nullable: true })
    categoryId?: number;

    @Field(() => Float, { nullable: true })
    rating?: number;

    @Field(() => Float, { nullable: true })
    minPrice?: number;

    @Field(() => Float, { nullable: true })
    maxPrice?: number;

    @Field(() => String, { nullable: true })
    sortBy?: string //'NEAREST' | 'TOP_RATED' | 'BUDGET';

   // @Field(() => Float, { nullable: true })
  //  lat?: number;

   // @Field(() => Float, { nullable: true })
   // lng?: number;

    //@Field(() => Float, { nullable: true })
   // distanceKm?: number;

   

    
  
}