import { createAction } from "deox";
import { LoginParams } from "../Login.types";

const namespace = "[Login]";

export const login = createAction(
  `${namespace} login`,
  resolve => (loginValues: LoginParams) => resolve(loginValues)
);
export const loginError = createAction(`${namespace} login error`);
export const loginSuccess = createAction(`${namespace} login success`);
