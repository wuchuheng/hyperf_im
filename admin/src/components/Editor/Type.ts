import {ReactNode} from "react";

export interface BaseState  {
  editorState: any;
  blockStyles: Array<BlockStyleState>; // 块样式
  inlineStyles: Array<InlineStyleState>;// 行内样式
}

// 块级工具样式名
export type BlockStyleState =
    'unordered-list-item'
  | 'ordered-list-item';


// 字号样式
export type FontSizeState =
  | 'FONT_SIZE_12'
  | 'FONT_SIZE_14'
  | 'FONT_SIZE_16'
  | 'FONT_SIZE_18'
  | 'FONT_SIZE_20'
  | 'FONT_SIZE_24'
  | 'FONT_SIZE_28'
  | 'FONT_SIZE_30'
  | 'FONT_SIZE_32'
  | 'FONT_SIZE_36'
  | 'FONT_SIZE_40'
  | 'FONT_SIZE_48'
  | 'FONT_SIZE_56'
  | 'FONT_SIZE_64'
  | 'FONT_SIZE_72'
  | 'FONT_SIZE_96'
  | 'FONT_SIZE_120'
  | 'FONT_SIZE_144';

// 字体背景
export type FontBackgroundColorState =
  | 'FONT_BACK_#000000'
  | 'FONT_BACK_#333333'
  | 'FONT_BACK_#666'
  | 'FONT_BACK_#999'
  | 'FONT_BACK_#ccc'
  | 'FONT_BACK_#ffffff'
  | 'FONT_BACK_#a0c5e8'
  | 'FONT_BACK_#61a951'
  | 'FONT_BACK_#16a085'
  | 'FONT_BACK_#07a9fe'
  | 'FONT_BACK_#003ba5'
  | 'FONT_BACK_#8e44ad'
  | 'FONT_BACK_#f32784'
  | 'FONT_BACK_#c0392b'
  | 'FONT_BACK_#d35400'
  | 'FONT_BACK_#f39c12'
  | 'FONT_BACK_#fdda00';

// 字体颜色
export type FontColorState =
  | 'FONT_COLOR_#000000'
  | 'FONT_COLOR_#333333'
  | 'FONT_COLOR_#666'
  | 'FONT_COLOR_#999'
  | 'FONT_COLOR_#ccc'
  | 'FONT_COLOR_#ffffff'
  | 'FONT_COLOR_#a0c5e8'
  | 'FONT_COLOR_#61a951'
  | 'FONT_COLOR_#16a085'
  | 'FONT_COLOR_#07a9fe'
  | 'FONT_COLOR_#003ba5'
  | 'FONT_COLOR_#8e44ad'
  | 'FONT_COLOR_#f32784'
  | 'FONT_COLOR_#c0392b'
  | 'FONT_COLOR_#d35400'
  | 'FONT_COLOR_#f39c12'
  | 'FONT_COLOR_#fdda00';

// 全部行内样式命名
export type InlineStyleState =
    FontColorState
  | FontBackgroundColorState
  | FontSizeState
  | 'BOLD'
  | 'ITALIC'
  | 'UNDERLINE';

// 块级样式列表
export type BlockStylesMapState = Array<{
  label: string;
  style: BlockStyleState;
  icon: ReactNode
}>;

// 行内样式列表
export type InlineStylesMapState = Array<{
  label: string;
  style: InlineStyleState;
  icon: ReactNode;
}>;


