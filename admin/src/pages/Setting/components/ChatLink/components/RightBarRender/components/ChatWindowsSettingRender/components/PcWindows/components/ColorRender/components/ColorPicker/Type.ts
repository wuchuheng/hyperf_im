export interface PropsState {
  title: string;
  color: string;
  onChange: (color: string) => void;
  className?: string;
}
