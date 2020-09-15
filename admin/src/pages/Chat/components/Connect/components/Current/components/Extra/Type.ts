import {KeyType} from '../../Type';
import {ReactNode} from "react";

export interface PropsState {
  noTitleKey: KeyType
}
export  type KeyMapToTabSate = Record<KeyType, ReactNode>;
