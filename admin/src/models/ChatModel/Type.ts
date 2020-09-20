import {Effect, Reducer, Subscription} from "@@/plugin-dva/connect";
import * as Icons from "@/components/Icons";
import {RerferrerKeyType, SystemKeyType, BrowerKeyType} from "@/pages/Chat/Type";

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

//  消息通知设置
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

// 交流消息（就是我:您好! 对方: 您好！。这种人对人的消息就是交流消息了。）
interface ChatMessaageState {
  id: number;
  retailType: 'inside' | 'room' // 传播范围类型,  内部传播 | 房间传播(房间所有人都能看见)
  contentType: 'file' | 'img' | 'text' ; // 内容
  content: string; // 内容
  hasReply: {
    isReply: boolean;
    replyToId?: number;
  },
  name: string; // 用户名
  createTimestamp: number; // 消息发送时间
  hasSendSuccess: {
    sendStatus: 'success' | 'loading' | 'fail'; // 发送状态
    loadingPercent: number; // 消息发送/接收进度
    reason?: string; // 消息发送失败原因
  };
  isRead: boolean; // 消息是否读取
}

// 公告标签消息
interface NoticeTagMessageState {
  id: number;
  tagType: 'conversation' | 'client' ; // 给会话加标签 ｜　给用户加标签
  curd: 'delete' | 'add'; // 删除 | 添加
  timestamp: number; // 时间
  color: string; //颜色
  tagName: string; // 标签名
}

// 公告坐标消息
interface NoticeLocationMessageState {
  id: number;
  landPage: { // 着陆页
    url: string;
    title: string;
  },
  chatPage: { // 对话页
    url: string;
    title: string;
  }
}

// 会话发起人通知消息
interface NoticeLauncherMessage {
  id: number; // 消息id
  type: 'me' | 'client'; // 我，客户
  timestamp: number;
}

// 会话结束通知消息
interface NoticeCloseMessage {
  id: number; // 消息id
  name: string; // 结束人名
  timestamp: number;
}

// 评价发起通知消息
interface NoticeLaunchRateMessage {
  id: number;
  name: string; // 发起人
  timestamp: number;
}

// 客户评价通知消息
interface NoticeRateMessage {
  id: number;
  timestamp: number;
  name: string;
  type: 'create' | 'update'; // 评价 | 修改评价
  rate: 1 | 2 | 3; // 差评 | 中评 | 好评
  content?: string;
}

// 已经展开的单个会话详情内容
export interface ConversationItemState {
  id: number; // 会话id
  endTimestamp: number; // 会话结束时间
  messages: Array<
      ChatMessaageState // 对话交流消息
    | NoticeTagMessageState // 标签通知消息
    | NoticeLocationMessageState // 坐标通知消息
    | NoticeCloseMessage // 结束通知消息
    | NoticeLauncherMessage // 会话发起人通知消息
    | NoticeLaunchRateMessage // 发起评价通知消息
    | NoticeRateMessage // 客户评价回复通知消息
    >
  tags: Array<{ // 会话标签
    color: string;
    name: string;
  }>
}


//联系人单项
export interface ClientState{
  isPut: boolean; // 是否置顶
  icon: keyof typeof Icons; // 图标
  tags: Array<{content: string, color: string}>; // 客户标签
  current: [ //
  ],
  source: { // 访问
    referrerKey: RerferrerKeyType; //来源类型
    systemKey: SystemKeyType; // 系统类型
    browerKey: BrowerKeyType; // 浏览器类型
    ip: string; // ip
  };
  businessCard: { // 名片
    name: string; // 名字
    age: number | null; // 年龄
    sex: 0 | 1 | 2; // 女 | 男 ｜未知
    phone: string | null;
    QQ: number | null;
    wechat: string | null;
    weibo: string | null;
    address: string | null;
    email: string | null;
    contact: string | null;
    note: string | null; // 备注
    fingerprint: string; // 访问标识
  };
  history: Array<{ // 历史
    timeStamp: number;
    name: string; // 客服人员名
    id: number; // 会话id
  }>;
  tickets: Array<{ // 工单
    ticketNo: string; // 编号
    title: string; // 标题
    author: string; // 创建人
    status: 'waiting' | 'doing' | 'finish' | 'nothing' // 状态 待回复 | 处理中 | 完成 | 无需解决
  }>
}

export interface ChatState {
  setting: {
    pageSetting: PageSettingState; // 页面设置
    notificationSetting: NotificationState; // 消息通知
  }
  clients: Array<ClientState>; // 联系人列表
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
