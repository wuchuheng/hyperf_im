import {Effect, Reducer, Subscription} from "@@/plugin-dva/connect";

// 联系人栏设置
interface ConnectBarSettingState {
  contactModel: 'normal' | 'simple'; // 模式
  isShowClientTag: boolean; // 是否显示顾客标签
  isConversationTimeoutWarn: boolean; // 是否超时提醒
  contactOrder: 'orderByNews' | 'orderByTime'; // 对话列表排序
  isNoReplyGoBottom: boolean; // 联系人没回复是否排到后面
}

// 右边栏设置
interface RightBarSettingState {
  tabItems: {
    clientTab: { isShow: boolean; }; // tab用户选项
    quickTab: {
      isShow: boolean;
      showType: 'fix' | 'tab'; // 固定展示或当tab的一项来展示
    }
  }
  tabDefaultShow: 'client' | 'quick'; // tab默认显示项
}

// 页面设置
export interface PageSettingState {
  connectBarSetting:ConnectBarSettingState; // 联系人栏设置
  rightBarSetting: RightBarSettingState; // 右边栏目设置
}

export interface ChatState {
  setting: {
    pageSetting: PageSettingState
  }
}

export interface ChatType {
  namespace: 'chat';
  state: ChatState;
  effects: {
    // send: Effect;
  },
  reducers: {
    save: Reducer<ChatState>;
  }
}
