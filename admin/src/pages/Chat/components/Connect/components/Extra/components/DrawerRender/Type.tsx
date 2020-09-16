import React, {ReactNode} from "react";

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
