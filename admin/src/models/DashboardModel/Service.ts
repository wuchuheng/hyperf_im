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
          {value: "", title:"访客数", icon: "UsersIcon", name: "Users" },
          {value: "", title:"访问次数", icon: "UserClicsIcon", name: "UserClics" },
          {value: "", title:"浏览量", icon: "ClicksIcon", name: "Clicks"}
        ]
      },
      {
        title: '对话',
        items:[
          {value: "", title:"正在对话数", icon: "BeingSessionsIcon", name: "BeingSessions" },
          {value: "", title:"已完成对话数", icon: "BeSessionsIcon", name: "BeSessions"},
          {value: "", title:"消息数", icon: "MessagesIcon" , name: "Messages"},
          {value: "", title:"遗漏对话", icon: "MissSessionsIcon" , name: "MissSessions"},
          {value: "", title:"有效对话", icon: "SuccessSessionsIcon" , name: "SuccessSessions"},
          {value: "", title:"主动转接", icon: "ConnectsIcon" , name: "Connects"},
          {value: "", title:"被动转接数", icon: "BeConnectIcon" , name: "BeConnect"},
        ]
      },

      {
        title: '表现',
        items: [
          {value: '', title: '平均在线时长', icon: 'AverageOnlineTimeIcon', name: 'AverageOnlineTime' },
          {value: '', title: '平均对话时长', icon: 'AverageOnlineSessionTimeIcon', name: 'AverageOnlineSessionTime'},
          {value: '', title: '平均对话响应时长', icon: 'AverageSessionReplyIcon', name: 'AverageSessionReply'},
          {value: '', title: '平均对话首次响应时长', icon: 'AverageFristReplyIcon', name: 'AverageFristReply'},
          {value: '', title: '获取线索数', icon: 'GetindexIcon', name: 'Getindex'}
        ]
      },

      {
        title: '评价',
        items: [
          {value: '', title: '评价数', icon: 'CommandsIcon', name: 'Commands'},
          {value: '', title: '平均参评率', icon: 'AverageCommandsIcon', name: 'AverageCommands'},
          {value: '', title: '平均好评率', icon: 'GoodAppraiseIcon', name: 'GoodAppraise'}
        ]
      },
      {
        title: '工单',
        items: [
          {value: '', title: '已处理工单', icon: 'beOrdersIcon', name: 'beOrders'},
          {value: '', title: '待处理工单', icon: 'beGoingOrdersIcon', name: 'beGoingOrders'},
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
     {value: "", title:"访客数", icon: 'UsersIcon' , name: 'Users'},
     {value: '', title:'访问次数', icon: 'UserClicsIcon' , name: 'UserClics'},
     {value: '', title:'浏览量', icon: 'ClicksIcon', name: 'Clicks'},
     {value: '', title:'正在对话数', icon: 'BeingSessionsIcon' , name: 'BeingSessions'},
     {value: '', title:'已完成对话数', icon: 'BeSessionsIcon', name: 'BeSessions'},
     {value: '', title:'消息数', icon: 'MessagesIcon' , name: 'Messages'},
     {value: '', title:'遗漏对话', icon: 'MissSessionsIcon' , name: 'MissSessions'},
     {value: '', title:'有效对话', icon: 'SuccessSessionsIcon' , name: 'SuccessSessions'}
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

