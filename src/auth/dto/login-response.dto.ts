// login-response.dto.ts
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LoginResponse {
@Field(() => String, { nullable: true })
accessToken?: string;
}