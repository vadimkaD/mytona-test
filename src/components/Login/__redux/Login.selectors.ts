import { LoginState } from "../Login.types";

export const loading = (state: LoginState): boolean => state.Login.loading;
