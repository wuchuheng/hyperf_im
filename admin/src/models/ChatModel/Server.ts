import {setCookie, getCookie} from "@/utils/cookie";
import {PageSettingState, NotificationState} from "@/models/ChatModel/Type";

const expired = 365 * 100;

const pageSettingKey = 'chatPageSetting' // 页面保存cookie key
/**
 * 获取页面设置
 */
export function getPageSetting(): PageSettingState
{
  if (getDataByKey(pageSettingKey)) return getDataByKey(pageSettingKey) as PageSettingState;
  // 初始化设置配置
  const setting: PageSettingState = {
    connectBarSetting: {
      contactModel: 'normal',
      isShowClientTag: true,
      isConversationTimeoutWarn: true,
      contactOrder: 'orderByNews',
      isNoReplyGoBottom: true
    },
    rightBarSetting: {
      tabItems: {
        clientTab: {
          isShow: true
        },
        quickTab: {
          isShow: true,
          showType: 'fix'
        }
      },
      tabDefaultShow: 'client'
    }
  }
  setCookie(pageSettingKey, JSON.stringify(setting), expired);
  return setting;
}

/**
 * 保存页面设置
 */
export function savePageSetting(pageSetting: PageSettingState): boolean {
  setCookie(pageSettingKey, JSON.stringify(pageSetting), expired);
  return true;
}


const notificationSettingKey = 'notificationSetting';
/**
 *  获取通知设置
 */
export function getNotificationSetting(): NotificationState
{
  if (getDataByKey(notificationSettingKey)) return getDataByKey(notificationSettingKey) as NotificationState;

  const notificationSetting: NotificationState = {
    hasNews: {
      isDesktopNotification: true,
      isVoiceNotification: true
    },
    hasConversation: {
      isDesktopNotification: true,
      isVoiceNotification: true
    },
    connectIn: {
      isDesktopNotification: true,
      isVoiceNotification: true
    },
    connectOut: {
      isDesktopNotification: true,
      isVoiceNotification: true
    },
    worker: {
      isDesktopNotification: true,
      isVoiceNotification: true
    },
    volume: 30
  };
  setCookie(notificationSettingKey, JSON.stringify(notificationSetting), expired);
  return notificationSetting;
}

/**
 * 保存通知设置
 * @param notificationSetting
 */
export function saveNotificationSetting(notificationSetting: NotificationState) {
  setCookie(notificationSettingKey, JSON.stringify(notificationSetting), expired);
  return true;
};


/**
 * 获取 本地缓存的配置
 * @param key
 */
function getDataByKey<T>(key: string): T | false
{
  const pageSettingJsonString = getCookie(key);
  if (pageSettingJsonString) {
    return JSON.parse(pageSettingJsonString) as T;
  } else {
    return false;
  }
}
