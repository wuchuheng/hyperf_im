export interface PropsState {
  color: string;
  backColor: string
  onChangeColor: (color: string)=> void;
  onChangeBackColor: (backColor: string)=> void;
  stylesMap: Object
}

export interface BaseState {
  isVisitTitle: boolean;
  isVisitOption: boolean;
}
