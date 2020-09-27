import {Effect, Reducer} from "@@/plugin-dva/connect";

// fqa选项
export interface FaqItemState {
  title: string;
  content: string;
  order_no: number;
}
export interface ConnectState {
  pcWindows: { // 手机窗口
    mini: { // 迷你窗口
      theme: string; // 主题色
      clientMessageColor: string; // 客户文本消息色
      backgroundColor: string; // 背景色
      backgroundImg: string;// 背景图片
      isBackgoundImg: boolean; // 是否启用背景图片
    },
    normal: { // 标准窗口
      theme: string; // 主题色
      clientMessageColor: string; // 客户文本消息色
      backgroundColor: string; // 背景色
      backgroundImg: string;// 背景图片
      isBackgoundImg: boolean; // 是否启用背景图片
    },
    fullScreen: { // 全屏幕
      theme: string; // 主题色
      clientMessageColor: string; // 客户文本消息色
    },
    custom: {
      theme: string; // 主题色
      clientMessageColor: string; // 客户文本消息色
      rightBarBackgroundColor: string; // 右边栏背景色
      backgroundColor: string; // 背景色
      rightBarContent: string; // 右侧信息栏
      backgroundImg: string;// 背景图片
      isBackgoundImg: boolean; // 是否启用背景图片
      avatarLocation: 'leftTop' | 'rightBar'; // 左上角小头像 | 右侧栏大头像
    },
    fqa:FaqItemState[];
  },
  phoneWindows: { // 手机窗口
    normal: {
      theme: string; // 主题色
      clientMessageColor: string; // 客户文本消息色
    },
    fqa:FaqItemState[];
  }
}
export interface SettingModelState {
  connect: ConnectState;
}

export interface SettingModelType {
  namespace: 'setting';
  state: SettingModelState ;
  effects: {
    login: Effect;
    loginFromCacheToken: Effect;
    logout: Effect;
  };
  reducers: {
    save: Reducer<SettingModelState>;
  };
}
