import { createReducer } from "deox";
import { news as defaultNews } from "../News.constants";
import { NewsItem } from "../../NewsItem/NewsItem.types";

export const news = createReducer(
  defaultNews as NewsItem[],
  handleAction => []
);
export const loading = createReducer(false as boolean, handleAction => []); //этот флаг можно вынести в общий компонент
