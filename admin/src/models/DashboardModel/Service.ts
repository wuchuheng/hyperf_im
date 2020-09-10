import {
  BeingSessionsIcon,
  BeSessionsIcon,
  ClicksIcon,
  MessagesIcon, MissSessionsIcon,
  SuccessSessionsIcon,
  UserClicsIcon,
  UsersIcon
} from "@/components/Icons";
import {DashboardModelState, GroupItemsState, TodayReportItemState} from './Type';

class Service
{
  /**
   *  获取今日数据概览全部选项
   */
  public static statuInculdeGroupItems(dashboardState: DashboardModelState): DashboardModelState
  {
    const groupItems: GroupItemsState[]  =  [
      {
        title: '访问',
        items:[
          {value: "", title:"访客数", icon: "UsersIcon" },
          {value: "", title:"访问次数", icon: "UserClicsIcon" },
          {value: "", title:"浏览量", icon: "ClicksIcon"}
        ]
      },
      {
        title: '对话',
        items:[
          {value: "", title:"正在对话数", icon: "BeingSessionsIcon" },
          {value: "", title:"已完成对话数", icon: "BeSessionsIcon"},
          {value: "", title:"消息数", icon: "MessagesIcon" },
          {value: "", title:"遗漏对话", icon: "MissSessionsIcon" },
          {value: "", title:"有效对话", icon: "SuccessSessionsIcon" },
          {value: "", title:"主动转接", icon: "ConnectsIcon" },
          {value: "", title:"被动转接数", icon: "BeConnectIcon" },
        ]
      },

      {
        title: '表现',
        items: [
          {value: '', title: '平均在线时长', icon: 'AverageOnlineTimeIcon' },
          {value: '', title: '平均对话时长', icon: 'AverageOnlineSessionTimeIcon'},
          {value: '', title: '平均对话响应时长', icon: 'AverageSessionReplyIcon'},
          {value: '', title: '平均对话首次响应时长', icon: 'AverageFristReplyIcon'},
          {value: '', title: '获取线索数', icon: 'GetindexIcon'}
        ]
      },

      {
        title: '评价',
        items: [
          {value: '', title: '评价数', icon: 'CommandsIcon'},
          {value: '', title: '平均参评率', icon: 'AverageCommandsIcon'},
          {value: '', title: '平均好评率', icon: 'GoodAppraiseIcon'}
        ]
      },
      {
        title: '工单',
        items: [
          {value: '', title: '已处理工单', icon: 'beOrdersIcon'},
          {value: '', title: '待处理工单', icon: 'beGoingOrdersIcon'},
        ]
      },
    ];
    const newDashboardState = {
      todayReport: {
        ...dashboardState.todayReport,
        groupItems: groupItems
      }
    }
    return newDashboardState;
  }

  /**
   *  初始化选项
   */
  public static initTodaySelectItems(dashboardState: DashboardModelState): DashboardModelState
  {
   const selecteItems: TodayReportItemState[] = [
     {value: "", title:"访客数", icon: 'UsersIcon' },
     {value: '', title:'访问次数', icon: 'UserClicsIcon' },
     {value: '', title:'浏览量', icon: 'ClicksIcon'},
     {value: '', title:'正在对话数', icon: 'BeingSessionsIcon' },
     {value: '', title:'已完成对话数', icon: 'BeSessionsIcon'},
     {value: '', title:'消息数', icon: 'MessagesIcon' },
     {value: '', title:'遗漏对话', icon: 'MissSessionsIcon' },
     {value: '', title:'有效对话', icon: 'SuccessSessionsIcon' }
   ]
    const newDashboardState = {
      todayReport: {
        ...dashboardState.todayReport,
        selectedItems: selecteItems
      }
    }
    return newDashboardState;
  }
}

export default Service;

