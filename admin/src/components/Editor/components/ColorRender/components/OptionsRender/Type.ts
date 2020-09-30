export interface PropsState  {
  colors: Array<string>;
  backColor: string;
  color: string;
  onChangeColor: (color: string) => void;
  onChangeBackColor: (color: string) => void;
};
