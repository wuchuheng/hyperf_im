export type KeyType = 'own' | 'coworker';

interface ListState {
  key: KeyType
  tab: string
}
export interface BaseState  {
  noTitleKey: KeyType;
  tabListNoTitle:  ListState[];
}
