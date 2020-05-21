import { createReducer } from "deox";
import { NewsItem } from "../../NewsItem/NewsItem.types";
import { loadNews, loadNewsError, loadNewsSuccess } from "./News.actions";

export const news = createReducer([] as NewsItem[], handleAction => [
  handleAction(loadNewsSuccess, (state, { payload }) => payload)
]);
export const loading = createReducer(false as boolean, handleAction => [
  handleAction(loadNews, () => true),
  handleAction([loadNewsSuccess, loadNewsError], () => false)
]); //этот флаг можно вынести в общий компонент
