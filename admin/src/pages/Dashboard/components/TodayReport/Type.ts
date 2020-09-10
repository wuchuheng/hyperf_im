import {ConnectProps, Loading, TodayReportItemState} from "umi";

export interface ComponentProps extends ConnectProps {
  preSelectedItems: TodayReportItemState
  loading: Loading;
}
