import { all, put, delay, takeLatest } from "redux-saga/effects";
import { ActionType, getType } from "deox";

import { loadNews, loadNewsSuccess } from "./News.actions";
import { news } from "../News.constants";

function* getNewsSaga(action: ActionType<typeof loadNews>) {
  yield delay(2000);
  yield put(loadNewsSuccess(news));
  yield;
}

export default function* newsSaga() {
  yield all([takeLatest(getType(loadNews), getNewsSaga)]);
}
