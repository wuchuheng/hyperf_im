export interface PropsState {
  onChange: (color: string) => void;
  color: string; // 热键的颜色
  selectColor: string; // 已经选中的背景色或颜色
}
