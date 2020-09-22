import {ReactNode} from "react";

export interface ItemState {
  key: string;
  render: ReactNode | string;
}

// 菜单组单项
export interface GroupItemState {
  groupTitle: ReactNode | string ;
  key: string;
  items: Array<ItemState>;
}

// 菜单组多项
export type GroupItemsState = Array<GroupItemState>;
