import { AppAbility } from './casl-ability.type';

export interface PolicyHandler {
  handle(ability: AppAbility): boolean;
}
