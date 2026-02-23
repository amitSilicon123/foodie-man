import { ObjectType } from '@nestjs/graphql';
import { createGqlResponse } from '../../gql-response.wrapper';
import { createGqlListResponse } from '../../gql-list-response.wrapper';
import { LoginResponse } from './login-response.dto';

@ObjectType()
export class LoginResponseWrapper extends createGqlResponse(LoginResponse) {}

@ObjectType()
export class LoginListResponseWrapper extends createGqlListResponse(LoginResponse) {}