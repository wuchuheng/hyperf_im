import {WebsocketState, WebsocketType} from "@/models/Websocket/Type";
import {websocketHost, websocketPort} from "@/config";
import {ConnectStatusState} from "@/models/Connect";
import {connect} from 'umi';
import {testWs} from "@/models/Websocket/Server";

export {WebsocketState}

const WebsocketModel: WebsocketType = {
  namespace: 'websocket',
  state: {
    isOpen: false,
    ws: null,
    requestingUrls: []
  },
  effects: {
    * send({payload}, {call, put, select}) {
      const ws= yield select((state: ConnectStatusState) => state.websocket.ws);
      ws.send(new Date());
    },
    // 连接成功
    * open({payload}, {call, put, select}) {
      yield put({ type: 'save', payload: {...payload, isOpen: true} });
    },
    // 获取状态
    * getState({payload}, {select}) {
      const allState = yield select((state: ConnectStatusState) => state);
      return  allState
    },
    * getDataInEffect ({payload}, {select, put, call}) {
      const ws= yield select((state: ConnectStatusState) => state.websocket.ws);
      const res = yield call(testWs, ws);
      return res;
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload
      };
    }
  },
  subscriptions: {
    // 连接websocket
    connect({dispatch, history}, a) {
      const socket = new WebSocket(`ws://${websocketHost}:${websocketPort}`);
      socket.addEventListener('open', function (event) {
        dispatch({ type: 'open', payload: {ws: socket} });
        // 心跳
        setInterval(() => {
          socket.send(
            JSON.stringify({ "type": "ping"})
          );
        }, 1000 * 60)
      });

     // /* setTimeout(() => {
     //    const res = dispatch({
     //      type: 'getDataInEffect'
     //    }) as Promise<any>;
     //    res.then((res: any) => {
     //      console.log(res);
     //    }).catch((e: any) => {
     //      console.log(e);
     //    })
     //  }, */1000);

    // Listen for messages
      socket.addEventListener('message', function (event) {
        const state = dispatch({
          type: 'getState'
        }) as Promise<any>;
        state.then(res => {
          console.log(res);
        })
        console.log('Message from server ', event.data);
      });
    }
  }
}

export default WebsocketModel;
