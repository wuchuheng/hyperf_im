import {InlineStyleState} from '../../Type';
export interface PropsState {
  inlineStyles: Array<InlineStyleState>;
  onChange: (fontsize:number) => void;
}

export interface BaseState {
  titleVisitAble: boolean;
  contentVisitAble: boolean;
  fontSize: number | undefined;
}
