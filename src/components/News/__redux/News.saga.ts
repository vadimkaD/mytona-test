import { all, call, delay, takeLatest } from "redux-saga/effects";
import { ActionType, getType } from "deox";

import { loadNews } from "./News.actions";

function* getNewsSaga(action: ActionType<typeof loadNews>) {
  yield;
}

export default function* newsSaga() {
  yield all([takeLatest(getType(loadNews), getNewsSaga)]);
}
