export interface BaseState {
  options: Array<number>
}

export interface PropsState {
  hasSelectFontsize: number | undefined;
  onChange: (fontsize: number) => void;
}
