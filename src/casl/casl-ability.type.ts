import { PureAbility } from '@casl/ability';
import { Action } from './action.enum';

export type Subjects = 'Post' | 'User' | 'Customer' | 'Request' | 'all';

export type AppAbility = PureAbility<
  [Action, Subjects]
>;
