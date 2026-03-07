import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';


@ObjectType()
export class CustomerInfoResponse {
    @Field(() => GraphQLBigInt)
    id : bigint;

    @Field()
    name: string;
    
    @Field()
    email : string;

    @Field()
    phone : string;

            
    @Field(() => [CustomerAddressResponse])
    customerAddress : CustomerAddressResponse[];
}

@ObjectType()
export class CustomerAddressResponse {
    @Field(() => GraphQLBigInt)
    id: bigint;

    @Field()
    address: string;

    @Field()
    locality: string;

    @Field()
    city: string;

    @Field()
    zipCode: string;

    @Field()
    isDefault: boolean;
}