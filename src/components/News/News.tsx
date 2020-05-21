import React, { useEffect } from "react";
import { List, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";

import Breadcrumbs from "../common/Breadcrumbs/Breadcrumbs";
import {
  loading as loadingSelector,
  news as newsSelector
} from "./__redux/News.selectors";
import NewsItemPreview from "./NewsItemPreview/NewsItemPreview";
import { NEWS_COUNT, NEWS_PAGES_COUNT } from "./News.constants";
import { NewsWrap } from "./News.styled";
import { loadNews } from "./__redux/News.actions";

const News: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const news = useSelector(newsSelector);
  const loading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  return (
    <>
      <Spin spinning={loading} size="large">
        <Breadcrumbs
          redirect={true}
          breadcrumbs={[
            { title: "Home", link: "/" },
            { title: "News", link: "/news" }
          ]}
        />
        <NewsWrap>
          <List
            grid={{ gutter: 16, column: 3 }}
            pagination={{
              pageSize: NEWS_COUNT / NEWS_PAGES_COUNT
            }}
            dataSource={news}
            renderItem={item => <NewsItemPreview item={item} />}
          />
        </NewsWrap>
      </Spin>
    </>
  );
};

export default News;
