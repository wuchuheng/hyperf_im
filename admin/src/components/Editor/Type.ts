export interface BaseState  {
  fontsize: number; // 字体大小
  editorState: any;
  color: string;
  backColor: string;
}

// 工具名
export type ToolNameState = 'FONT_SIZE'
| 'FONT_COLOR'
| 'FONT_BACK';

