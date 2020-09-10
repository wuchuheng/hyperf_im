import {ReactNode} from "react";
import {Effect, Reducer, Subscription} from "@@/plugin-dva/connect";

export interface TodayReportItemState {
  icon: ReactNode;
  title: string;
  value: string;
}
export interface TodayReportState {
  selectedItems: TodayReportItemState []
  preSelectedItems: TodayReportItemState []
}
export interface DashboardModelState {
  name: string;
  todayReport: TodayReportState
}
export interface DashboardModelType {
  namespace: 'dashboard';
  state: DashboardModelState
  effects: {
    query: Effect;
    preSelectItems: Effect;
  };
  reducers: {
    save: Reducer<DashboardModelState>;
    saveTodayReportInitItems: Reducer<DashboardModelState>;
  };
  subscriptions: { setup: Subscription, keyEvent: Subscription };
}

