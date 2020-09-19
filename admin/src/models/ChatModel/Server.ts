import {setCookie, getCookie} from "@/utils/cookie";
import {PageSettingState} from "@/models/ChatModel/Type";

/**
 * 获取页面设置
 */
export function getPageSetting(): PageSettingState
{
  const pageSetting = 'chatPageSetting'
  const pageSettingJsonString = getCookie(pageSetting);
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
  setCookie(pageSetting , JSON.stringify(setting));
  return setting;
}
