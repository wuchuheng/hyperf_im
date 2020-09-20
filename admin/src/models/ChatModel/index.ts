import {ChatState, ChatType, NotificationState} from "@/models/ChatModel/Type";
import {getPageSetting, savePageSetting, getNotificationSetting, saveNotificationSetting} from './Server';
import { ConnectStatusState } from '../Connect'
import {MoveIcon} from "@/components/Icons";

export {ChatState, NotificationState};

const pageSetting = getPageSetting();
const notificationSetting = getNotificationSetting();
const ChatModel: ChatType = {
  namespace: 'chat',
  state: {
    setting: {
      pageSetting: {
        ...pageSetting
      },
      notificationSetting: {
        ...notificationSetting
      }
    },
    clients: []
  },
  effects: {
    // 保存页面设置
    * savePageSetting({payload}, {call, put, select, cancel, take}) {
      const chat = yield select((state: ConnectStatusState) => state.chat );
      yield put({
        type: 'save',
        payload: {
          ...chat,
          setting: {
            ...chat.setting,
            pageSetting: payload
          }
        }
      });
      yield call(savePageSetting, payload);
      return true;
    },
    * saveNotificationSetting({payload}, {select, call, put}) {
      const chat = yield select((state: ConnectStatusState) => state.chat );
      yield call(saveNotificationSetting, payload);
      yield put({
        type: 'save',
        payload: {
          ...chat,
          setting: {
            ...chat.setting,
            notificationSetting: payload
          }
        }
      });
      return true;
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload
      };
    }
  }
};

export default ChatModel;
