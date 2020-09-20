import {DashboardModelState} from "@/models/DashboardModel";
import {UserModelState} from "@/models/UserModel";
import {WebsocketState} from "@/models/Websocket";
import {ChatState} from "@/models/ChatModel";

export interface ConnectStatusState {
  dashboard: DashboardModelState,
  user: UserModelState,
  websocket: WebsocketState,
  chat: ChatState
}
