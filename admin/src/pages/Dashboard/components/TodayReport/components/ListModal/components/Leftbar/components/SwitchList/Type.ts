import {DashboardModelState, TodayReportItemState  } from "@/models/DashboardModel";
import {ReactNode} from 'react';
import {ConnectProps, Loading} from "umi";

export type ItemType = {
  value: string;
  title: string;
  isDisable: boolean;
  isCheck: boolean;
}
export type SwitchGroupType= {
  title: string,
  items: ItemType[]
}

export type statusType = {
  defaultData: SwitchGroupType[]
}

export type componentProps = {
  preSelectedItems: TodayReportItemState;
  loading: boolean;
}

export interface ComponentProps extends ConnectProps {
  preSelectedItems: TodayReportItemState
  loading: Loading;
}
