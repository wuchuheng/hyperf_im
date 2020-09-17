import {RerferrerKeyType } from "@/pages/Chat/components/Connect/components/Extra/components/DrawerRender/Type";
// 来源值约束
export type ReferrerState = RerferrerKeyType;

type TrackType = {
  time: string;
  url: string;
}
export interface TracksState {
  current: string;
  passed: Array<TrackType>;
}
