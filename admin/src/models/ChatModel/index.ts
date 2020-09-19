import {ChatState, ChatType} from "@/models/ChatModel/Type";
import {getPageSetting} from './Server';

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
