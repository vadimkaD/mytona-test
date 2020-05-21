import { all, call, takeLatest } from "redux-saga/effects";
import { ActionType, getType } from "deox";

import { logout } from "./Auth.actions";
import { clearToken } from "../Auth.utils";

function* logoutSaga(action: ActionType<typeof logout>) {
  yield call(clearToken);
}

export default function* authSaga() {
  yield all([takeLatest(getType(logout), logoutSaga)]);
}
