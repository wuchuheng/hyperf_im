import {setCookie, getCookie} from "@/utils/cookie";
import {PageSettingState} from "@/models/ChatModel/Type";

const pageSettingKey = 'chatPageSetting' // 页面保存cookie key

/**
 * 获取页面设置
 */
export function getPageSetting(): PageSettingState
{
  const pageSettingJsonString = getCookie(pageSettingKey );
  if (pageSettingJsonString) {
      return JSON.parse(pageSettingJsonString) as PageSettingState;
  }
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
  setCookie(pageSettingKey, JSON.stringify(setting));
  return setting;
}

/**
 * 保存页面设置
 */
export function savePageSetting(pageSetting: PageSettingState): boolean {
  setCookie(pageSettingKey, JSON.stringify(pageSetting));
  return true;
}
