import React, {ReactNode} from "react";
import * as Icons from "@/components/Icons";

export type KeyType = 'visitor' | 'queue';

export interface NoTitleKeyItemState {
  key: KeyType;
  tab: string;
}
export interface BaseState
{
  noTitleKey: KeyType;
  tabListNoTitle: NoTitleKeyItemState[];
}

export type ContentListNoTitleType = Record<KeyType, ReactNode>


export type RerferrerKeyType = 'explicit'| 'thirdParty'| 'baidu'| '360'| 'sogo'| 'sm'| 'biyin'| 'google'| 'bcp';
type RerferrerMapTitleStateType = Record<RerferrerKeyType, {title: string, icon: keyof  typeof Icons}>;
// 来源对照名字
export const RerferrerMapTitleIconState: RerferrerMapTitleStateType = {
  explicit: {title: '直接访问', icon: 'ExplicitIcon'},
  thirdParty: {title: '第三方', icon: 'ExplicitIcon'},
  baidu: {title: '百度', icon: 'ExplicitIcon'},
  '360': {title: '360', icon: 'ExplicitIcon'},
  sogo: {title: '搜狗', icon: 'ExplicitIcon'},
  sm: {title: '神马', icon: 'ExplicitIcon'},
  biyin: {title: '必应', icon: 'ExplicitIcon'},
  google: {title: '谷歌', icon: 'ExplicitIcon'},
  bcp: {title: '百度bcp', icon: 'ExplicitIcon'},
}
