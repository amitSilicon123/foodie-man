import { Scalar } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@Scalar('BigInt', () => GraphQLBigInt)
export class BigIntScalar {}