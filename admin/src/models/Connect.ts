import {DashboardModelState} from "@/models/DashboardModel";
import {UserModelState} from "@/models/UserModel";
import {WebsocketState} from "@/models/Websocket";

export interface ConnectStatusState {
  dashboard: DashboardModelState,
  user: UserModelState,
  websocket: WebsocketState
}
