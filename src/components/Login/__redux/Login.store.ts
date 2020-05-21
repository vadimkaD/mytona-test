import { createReducer } from "deox";
import { login, loginError, loginSuccess } from "./Login.actions";

export const loading = createReducer(false as boolean, handleAction => [
  handleAction(login, () => true),
  handleAction(loginError, () => false),
  handleAction(loginSuccess, () => false)
]);
