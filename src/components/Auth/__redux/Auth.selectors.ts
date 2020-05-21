import { AuthState } from "../Auth.types";

export const isAuthenticated = (state: AuthState): boolean =>
  state.Auth.isAuthenticated;
