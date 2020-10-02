import {ReactNode} from "react";

export interface BaseState  {
  fontsize: number; // 字体大小
  editorState: any;
  color: string;
  backColor: string;
  fontBold: string;
  italic: string;
  underline: string;
  blockStyles: Array<BlockToolNameState>;
}

// 块级工具样式名
export type BlockToolNameState = 'unordered-list-item'| 'ordered-list-item'

// 行级工具样式名
export type InlineToolNameState ='FONT_SIZE'
  | 'FONT_COLOR'
  | 'FONT_BACK'
  | 'FONT_BOLD'
  | 'ITALIC'
  | 'UNDERLINE';

// 工具名
export type ToolNameState =
  InlineToolNameState
  | BlockToolNameState;

// 块级样式列表
export type MapBlockStylesState = Array<{
  label: string;
  style: BlockToolNameState;
  icon: ReactNode
}>;

