export interface BaseState  {
  fontsize: number; // 字体大小
  editorState: any;
  color: string;
  backColor: string;
  fontBold: string;
  italic: string;
  underline: string;
}

// 工具名
export type ToolNameState = 'FONT_SIZE'
| 'FONT_COLOR'
| 'FONT_BACK'
| 'FONT_BOLD'
| 'ITALIC'
| 'UNDERLINE';

