import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const statusCode =
      context.switchToHttp().getResponse().statusCode || 200;

    return next.handle().pipe(
      map((data) => ({
        status: true,
        message: data?.message ?? 'Success',
        statusCode: statusCode,
        data: data?.data ?? data
      }))
    );
  }
}
