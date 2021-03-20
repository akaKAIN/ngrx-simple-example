import {UserState} from '../states/user.state';
import {EUserActions, UserActions} from '../actions/user.actions';

export const userReducers = (state: UserState, action: UserActions): UserState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess:
      return { ... state, users: action.payload };
    case EUserActions.GetUserSuccess:
      return { ...state, selectedUser: action.payload };
    default:
      return state;
  }
};
