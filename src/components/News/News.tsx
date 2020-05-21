import React from "react";
import { List, Avatar, Space, Card } from "antd";
import { useSelector } from "react-redux";

import Breadcrumbs from "../common/Breadcrumbs/Breadcrumbs";
import { PageWrap } from "../AppContent/AppContent.styled";
import { news as newsSelector } from "./__redux/News.selectors";
import NewsItemPreview from "./NewsItemPreview/NewsItemPreview";
import { NEWS_COUNT, NEWS_PAGES_COUNT } from "./News.constants";
import { NewsWrap } from "./News.styled";

const News: React.FunctionComponent<{}> = () => {
  const news = useSelector(newsSelector);

  return (
    <>
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
    </>
  );
};

export default News;
