import {User} from '../../models/base.model';

export interface UserState {
  users: User[];
  selectedUser: User;
}

export const initialUserState: UserState = {
  users: null,
  selectedUser: null
};
