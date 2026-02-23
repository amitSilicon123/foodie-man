// response.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class ResponseInterceptorNew implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    // Step 1: Detect if request is GraphQL
    const gqlCtx = GqlExecutionContext.create(context);
    if (gqlCtx.getType() === 'graphql') {
      // Step 2: Skip wrapping for GraphQL
      return next.handle();
    }

    // Step 3: Wrap only REST responses
    return next.handle().pipe(
      map((data) => ({
        status: true,
        message: 'Success',
        statusCode: 200,
        data,
      })),
    );
  }
}
