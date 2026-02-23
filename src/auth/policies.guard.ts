import {
  Injectable,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { CHECK_POLICIES_KEY } from '../casl/constants';
import { PolicyHandler } from '../casl/policy-handler.interface';
@Injectable()
export class PoliciesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslFactory: CaslAbilityFactory,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    // 1️⃣ Route ki policies
    const handlers =
      this.reflector.getAllAndOverride<PolicyHandler[]>(
        CHECK_POLICIES_KEY,
        [context.getHandler(), context.getClass()],
      ) || [];

    // 2️⃣ Logged-in user
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // 3️⃣ Ability create
    const ability = this.caslFactory.createForUser(user);

    // 4️⃣ Sab policies pass honi chahiye
    return handlers.every(handler =>
      handler.handle(ability),
    );
  }
}
