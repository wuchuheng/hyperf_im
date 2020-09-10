import {Effect, Reducer, Subscription} from "@@/plugin-dva/connect";
import * as Icons from "@/components/Icons";

export interface TodayReportItemState {
  icon: keyof typeof Icons;
  title: string;
  value: string;
}
export interface GroupItemsState {
  title: string;
  items: TodayReportItemState[];
}
export interface TodayReportState {
  groupItems: GroupItemsState[];
  selectedItems: TodayReportItemState [];
  preSelectedItems: TodayReportItemState [];
}
export interface DashboardModelState {
  todayReport: TodayReportState
}
export interface DashboardModelType {
  namespace: 'dashboard';
  state: DashboardModelState
  effects: {
    query: Effect;
    preSelectItems: Effect;
    initTodayGroupItems: Effect;
    initTodaySelectItems: Effect;
    initTodayPreSelectItems: Effect;
  };
  reducers: {
    save: Reducer<DashboardModelState>;
  };
  subscriptions: { setup: Subscription, keyEvent: Subscription };
}

