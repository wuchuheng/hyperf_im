import {ChatState, ChatType} from "@/models/ChatModel/Type";
import {getPageSetting, savePageSetting} from './Server';
import { ConnectStatusState } from '../Connect'

export {ChatState};

const pageSetting = getPageSetting();
const ChatModel: ChatType = {
  namespace: 'chat',
  state: {
    setting: {
      pageSetting: {
        ...pageSetting
      }
    }
  },
  effects: {
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
