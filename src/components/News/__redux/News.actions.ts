import { createAction } from "deox";
import { NewsItem } from "../../NewsItem/NewsItem.types";

const namespace = "[News]";

export const loadNews = createAction(`${namespace} load news`);
export const loadNewsSuccess = createAction(
  `${namespace} load news success`,
  resolve => (news: NewsItem[]) => resolve(news)
);
