import {Effect, Reducer, Subscription} from "@@/plugin-dva/connect";

export interface WebsocketState {
  isOpen: boolean;
  ws: any;
}

export interface WebsocketType {
  namespace: 'websocket';
  state: WebsocketState;
  effects: {
    send: Effect;
    open: Effect;
  },
  reducers: {
    save: Reducer<WebsocketState>;
  },
  subscriptions: { connect: Subscription};
}
