export interface BaseState {
  password: string ;
  username: string ;
  rememberMe: boolean;
}

interface ErrorFieldState {
  errors: string[];
  name: string[];
}

type ErrorFieldsState = ErrorFieldState[];

export interface ErrorInfoState {
  errorFields: ErrorFieldsState;
  outOfDate: boolean;
  values: boolean;
}
