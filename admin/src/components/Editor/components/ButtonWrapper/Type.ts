import {BlockToolNameState} from '../../Type';
export type PlacementType = "bottom" | "top" | "left" | "right" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom" | undefined ;
export interface PropsState {
  placement?: PlacementType;
  label: any;
  isActive: boolean;
  style: BlockToolNameState;
  onToggle: (style: BlockToolNameState) => void;
}
