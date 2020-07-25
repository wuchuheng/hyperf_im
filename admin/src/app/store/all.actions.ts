import { createAction, props } from '@ngrx/store';

export const AUTH_LOGIN_ACTION = '[auth login] login';

export interface loginActionDataType {
  username: string,
  rememberMe: boolean,
  accessToken: string,
  expiredAt: string,
  refreshedAt: string
}

export const authLoginAction = createAction(
  AUTH_LOGIN_ACTION,
  props<loginActionDataType>()
);
