import {DashboardModelState, TodayReportItemState  } from "@/models/DashboardModel";
import {ReactNode} from 'react';
import {ConnectProps, Loading} from "umi";

export type itemType = {
  value: string;
  title: string;
  isDisable: boolean;
  isCheck: boolean;
  icon: ReactNode;
}
export type switchGroupType= {
  title: string,
  items: itemType[]
}

export type statusType = {
  defaultData: switchGroupType[]
}

export type componentProps = {
  preSelectedItems: TodayReportItemState;
  loading: boolean;
}

export interface ComponentProps extends ConnectProps {
  preSelectedItems: TodayReportItemState
  loading: Loading;
}
