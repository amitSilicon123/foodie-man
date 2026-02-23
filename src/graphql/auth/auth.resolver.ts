import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { LoginResponseWrapper, LoginListResponseWrapper } from './dto/login-response-wrapper.dto';

import { LoginResponse } from './dto/login-response.dto';
import { Public } from '../../auth/auth.guard';
import { LoginInput } from './dto/login.input';
import { AuthService } from '../../auth/auth.service';
@Resolver(() => LoginResponse)
export class AuthResolver {
    constructor(private readonly authService:AuthService){}
  // ✅ REQUIRED ROOT QUERY
  @Public()
  @Query(() => String)
  healthCheck(): string {
    return 'Auth GraphQL API is running';
  }

  @Public()
  @Mutation(() => LoginListResponseWrapper)
  async login(@Args('input') input: LoginInput): Promise<LoginListResponseWrapper> {
      const { email, password } = input;
      const result = await this.authService.signIn(email, password); 
   
      if(!result) {
        return {
          success: false,
          message: 'Invalid credentials',
          errors: ['Email or password incorrect'],
        };
      }
      
      return {
        success: true,
        message: 'Login successful',
        data: { accessToken : result.access_token }
      };
  }
}
