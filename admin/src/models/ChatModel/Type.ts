import {Effect, Reducer, Subscription} from "@@/plugin-dva/connect";
import ex from "umi/dist";

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

//  消息通知
export interface NotificationState {
  hasNews: { // 有新消息
    isDesktopNotification: boolean;
    isVoiceNotification: boolean;
  },
  hasConversation: { // 有新对话
    isDesktopNotification: boolean;
    isVoiceNotification: boolean;
  },
  connectIn: { // 转入对话
    isDesktopNotification: boolean;
    isVoiceNotification: boolean;
  },
  connectOut: { // 转出对话
    isDesktopNotification: boolean;
    isVoiceNotification: boolean;
  },
  worker: { // 同事新对话
    isDesktopNotification: boolean;
    isVoiceNotification: boolean;
  },
  volume: number; // 声音
}

export interface ChatState {
  setting: {
    pageSetting: PageSettingState; // 页面设置
    notificationSetting: NotificationState; // 消息通知
  }
}

export interface ChatType {
  namespace: 'chat';
  state: ChatState;
  effects: {
    savePageSetting: Effect; // 保存页面设置
    saveNotificationSetting: Effect; // 保存消息通知设置
  },
  reducers: {
    save: Reducer<ChatState>;
  }
}
