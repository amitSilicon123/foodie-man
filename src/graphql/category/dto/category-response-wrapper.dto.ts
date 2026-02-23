import { ObjectType } from '@nestjs/graphql';
import { createGqlResponse } from '../../gql-response.wrapper';
import { CategoryResponse } from './category-response.dto';


@ObjectType()
export class CategoryResponseWrapper extends createGqlResponse(CategoryResponse ) {}

