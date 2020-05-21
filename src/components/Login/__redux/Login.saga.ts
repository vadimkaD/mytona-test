import { all, put, select, call, takeLatest } from "redux-saga/effects";
import { ActionType, getType } from "deox";
import { message } from "antd";

import { login, loginError, loginSuccess } from "./Login.actions";
import { LoginAnswer, LoginFormValues, LoginParams } from "../Login.types";
import { auth } from "../Login.utils";
import { saveToken } from "../../Auth/Auth.utils";

function* loginSaga(action: ActionType<typeof login>) {
  const values: LoginParams = action.payload;
  const { password, history, username } = values;
  const result: LoginAnswer = yield call(auth, { username, password });
  if (result.isAuthenticated) {
    yield put(loginSuccess());
    yield call(saveToken, "some-random-token-because-of-missing-backend");
    const state = history.location.state as {
      from: { pathname: string; search: string; hash: string };
    };
    if (state.from.pathname) {
      history.push(state.from.pathname);
    } else {
      history.push("/");
    }
  } else {
    message.error(result.errors.join("\n"));
    yield put(loginError());
  }
}

export default function* loginPageSaga() {
  yield all([takeLatest(getType(login), loginSaga)]);
}
