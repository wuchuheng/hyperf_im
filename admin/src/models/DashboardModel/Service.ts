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
          {value: "", title:"访客数", icon: "UsersIcon", name: "UsersIcon" },
          {value: "", title:"访问次数", icon: "UserClicsIcon", name: "UserClicsIcon" },
          {value: "", title:"浏览量", icon: "ClicksIcon", name: "ClicksIcon"}
        ]
      },
      {
        title: '对话',
        items:[
          {value: "", title:"正在对话数", icon: "BeingSessionsIcon", name: "BeingSessionsIcon" },
          {value: "", title:"已完成对话数", icon: "BeSessionsIcon", name: "BeSessionsIcon"},
          {value: "", title:"消息数", icon: "MessagesIcon" , name: "MessagesIcon"},
          {value: "", title:"遗漏对话", icon: "MissSessionsIcon" , name: "MissSessionsIcon"},
          {value: "", title:"有效对话", icon: "SuccessSessionsIcon" , name: "SuccessSessionsIcon"},
          {value: "", title:"主动转接", icon: "ConnectsIcon" , name: "ConnectsIcon"},
          {value: "", title:"被动转接数", icon: "BeConnectIcon" , name: "BeConnectIcon"},
        ]
      },

      {
        title: '表现',
        items: [
          {value: '', title: '平均在线时长', icon: 'AverageOnlineTimeIcon', name: 'AverageOnlineTimeIcon' },
          {value: '', title: '平均对话时长', icon: 'AverageOnlineSessionTimeIcon', name: 'AverageOnlineSessionTimeIcon'},
          {value: '', title: '平均对话响应时长', icon: 'AverageSessionReplyIcon', name: 'AverageSessionReplyIcon'},
          {value: '', title: '平均对话首次响应时长', icon: 'AverageFristReplyIcon', name: 'AverageFristReplyIcon'},
          {value: '', title: '获取线索数', icon: 'GetindexIcon', name: 'GetindexIcon'}
        ]
      },

      {
        title: '评价',
        items: [
          {value: '', title: '评价数', icon: 'CommandsIcon', name: 'CommandsIcon'},
          {value: '', title: '平均参评率', icon: 'AverageCommandsIcon', name: 'AverageCommandsIcon'},
          {value: '', title: '平均好评率', icon: 'GoodAppraiseIcon', name: 'GoodAppraiseIcon'}
        ]
      },
      {
        title: '工单',
        items: [
          {value: '', title: '已处理工单', icon: 'beOrdersIcon', name: 'beOrdersIcon'},
          {value: '', title: '待处理工单', icon: 'beGoingOrdersIcon', name: 'beGoingOrdersIcon'},
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
     {value: "", title:"访客数", icon: 'UsersIcon' , name: 'UsersIcon'},
     {value: '', title:'访问次数', icon: 'UserClicsIcon' , name: 'UserClicsIcon'},
     {value: '', title:'浏览量', icon: 'ClicksIcon', name: 'ClicksIcon'},
     {value: '', title:'正在对话数', icon: 'BeingSessionsIcon' , name: 'BeingSessionsIcon'},
     {value: '', title:'已完成对话数', icon: 'BeSessionsIcon', name: 'BeSessionsIcon'},
     {value: '', title:'消息数', icon: 'MessagesIcon' , name: 'MessagesIcon'},
     {value: '', title:'遗漏对话', icon: 'MissSessionsIcon' , name: 'MissSessionsIcon'},
     {value: '', title:'有效对话', icon: 'SuccessSessionsIcon' , name: 'SuccessSessionsIcon'}
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

