import { HistoryObject } from "../../types";

export interface LoginFormValues {
  username: string;
  password: string;
}

export type LoginParams = LoginFormValues & HistoryObject;

export interface LoginAnswer {
  isAuthenticated: boolean;
  errors: string[];
}

export interface LoginState {
  Login: {
    loading: boolean;
  };
}
