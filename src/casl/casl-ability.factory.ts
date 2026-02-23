import { Injectable } from '@nestjs/common';
import {
  AbilityBuilder,
  createMongoAbility,
} from '@casl/ability';
import { Action } from './action.enum';
import { AppAbility } from './casl-ability.type';

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: any): AppAbility {
    const { can, cannot, build } =
      new AbilityBuilder<AppAbility>(
        createMongoAbility, // ✅ THIS IS THE FIX
      );

    if (user.role === 'admin') {
      can(Action.Manage, 'all');
    } else {
      can(Action.Read, 'Request', {
        customerId: user.id, // ✅ conditions now work
      });
    }

    return build();
  }
}
