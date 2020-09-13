interface ValueState {
  password: string | undefined;
  username: string | undefined;
  remerberMe: boolean;
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
