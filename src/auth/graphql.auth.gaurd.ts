import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GaphQLAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // ✅ GraphQL context se request extract
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    if (!req) {
      throw new Error('No request found in GraphQL context');
    }

    const token = req.headers?.authorization;
    if (!token) return false;

    // 🔹 Demo token check
    if (token !== 'Bearer faketoken123') return false;

    return true;
  }
}
