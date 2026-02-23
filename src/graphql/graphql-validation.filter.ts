import {
  Catch,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';

@Catch(BadRequestException)
export class GraphqlValidationFilter implements GqlExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const response: any = exception.getResponse();

    return {
      success: false,
      message: 'Validation failed',
      errors: response.message || ['Invalid input'],
      data: null,
    };
  }
}
