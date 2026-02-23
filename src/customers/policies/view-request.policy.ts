import { PolicyHandler } from '../../casl/policy-handler.interface';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.type';
export class ViewRequestPolicy implements PolicyHandler {
  handle(ability: AppAbility): boolean {
    return ability.can(Action.Read, 'Customer');
  }
}
