import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store';
import *  as AllActions from "../all.actions";
import { AuthService } from '../../shared/services/auth/auth.service'

export interface State {}

const initalState = {
  accessToken: '',
  refreshedAt: '',
  rememberMe: false,
  expiredAt: '',
  username: ''
};

export function authReducer(state:{} = initalState, action: Action) {
  const { type, ...params } = action;
  switch(type) {
    case (AllActions.AUTH_LOGIN_ACTION):
      state = params;
      return state;
      break;

    default:
      return state;
  }
  state = action
  return state;
}
