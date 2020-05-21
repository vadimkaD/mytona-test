import { NewsItem } from "../NewsItem/NewsItem.types";

export interface NewsState {
  News: {
    news: NewsItem[];
    loading: boolean;
  };
}
