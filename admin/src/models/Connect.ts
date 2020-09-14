import {DashboardModelState} from "@/models/DashboardModel";
import {UserModelState} from "@/models/UserModel";

export interface ConnectStatusState {
  dashboard: DashboardModelState,
  user: UserModelState
}
