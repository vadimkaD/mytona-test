import { createSelector } from "reselect";
import { NewsState } from "../News.types";
import { NewsItem } from "../../NewsItem/NewsItem.types";

export const news = (state: NewsState): NewsItem[] => state.News.news;
export const newsByLink = (link: string) =>
  createSelector<NewsState, NewsItem[], NewsItem | null>(news, news => {
    const item = news.find(item => item.link === link);
    return item ? item : null;
  });
