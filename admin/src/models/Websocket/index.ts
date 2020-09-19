import {WebsocketState, WebsocketType} from "@/models/Websocket/Type";
import {websocketHost, websocketPort} from "@/config";
import {ConnectStatusState} from "@/models/Connect";

export {WebsocketState}

const WebsocketModel: WebsocketType = {
  namespace: 'websocket',
  state: {
    isOpen: false,
    ws: null
  },
  effects: {
    * send({payload}, {call, put, select}) {
      const ws= yield select((state: ConnectStatusState) => state.websocket.ws);
      ws.send(new Date());
    },
    // 连接成功
    * open({payload}, {call, put, select}) {
      yield put({ type: 'save', payload: {...payload, isOpen: true} });
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

    // Listen for messages
      socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
      });
    }
  }
}

export default WebsocketModel;
