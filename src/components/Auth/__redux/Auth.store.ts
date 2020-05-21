import { createReducer } from "deox";
import { loginSuccess } from "../../Login/__redux/Login.actions";
import { getIsAuthenticated } from "../Auth.utils";
import { logout } from "./Auth.actions";

export const isAuthenticated = createReducer(
  getIsAuthenticated() as boolean,
  handleAction => [
    handleAction(loginSuccess, () => true),
    handleAction(logout, () => false)
  ]
);
