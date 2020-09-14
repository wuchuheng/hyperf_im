import {Effect, Reducer, Subscription} from "@@/plugin-dva/connect";

export interface UserModelState {
  isLogin: boolean;
  username: string;
  avatar: string;
  roles: string[];
}
export interface UserModelType {
  namespace: 'user';
  state: UserModelState ;
  effects: {
    login: Effect;
    loginFromCacheToken: Effect;
    logout: Effect;
  };
  reducers: {
    save: Reducer<UserModelState>;
  };
  subscriptions: { setup: Subscription};
}
