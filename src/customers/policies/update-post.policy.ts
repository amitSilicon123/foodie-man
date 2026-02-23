
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.type';
export class UpdatePostPolicy {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, 'Post');
  }
}
