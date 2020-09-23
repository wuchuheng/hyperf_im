import {Effect, Reducer, Subscription} from "@@/plugin-dva/connect";

export interface WebsocketState {
  isOpen: boolean;
  ws: any;
  requestingUrls: Array<{
    url: string; // url
    percent: number; // 进度
  }>; // effect请求中的url标识
}

export interface WebsocketType {
  namespace: 'websocket';
  state: WebsocketState;
  effects: {
    send: Effect;
    open: Effect;
    getState: Effect;
    getDataInEffect: Effect;
  },
  reducers: {
    save: Reducer<WebsocketState>;
  },
  subscriptions: { connect: Subscription};
}
