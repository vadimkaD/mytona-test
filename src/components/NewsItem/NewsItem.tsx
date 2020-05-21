import React, { useEffect } from "react";
import { Card } from "antd";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Image,
  TextPreviewWrap
} from "../News/NewsItemPreview/NewsItemPreview.styled";
import {
  loading as loadingSelector,
  newsByLink
} from "../News/__redux/News.selectors";
import Breadcrumbs from "../common/Breadcrumbs/Breadcrumbs";
import { selectMenuItemLink } from "../HeaderMenu/__redux/HeaderMenu.actions";
import { loadNews } from "../News/__redux/News.actions";

export const NewsItem: React.FunctionComponent<{}> = () => {
  const { link } = useParams();
  const item = useSelector(newsByLink(link));
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(selectMenuItemLink("/news"));
    dispatch(loadNews());
  }, [dispatch]);

  if (!item) {
    return (
      <>
        <Breadcrumbs
          redirect={true}
          breadcrumbs={[
            { title: "Home", link: "/" },
            { title: "News", link: "/news" },
            { title: "Идет загрузка", link: `/news/${link}` }
          ]}
        />
        <Card title="Идет загрузка" loading={loading} />
      </>
    );
  }

  return (
    <>
      <Breadcrumbs
        redirect={true}
        breadcrumbs={[
          { title: "Home", link: "/" },
          { title: "News", link: "/news" },
          { title: item.title, link: `/news/${link}` }
        ]}
      />
      <Card title={item.title} loading={loading}>
        <Image src={item.imageUrl} />
        <h2>{item.title}</h2>
        <TextPreviewWrap>{item.text}</TextPreviewWrap>
      </Card>
    </>
  );
};

export default NewsItem;
