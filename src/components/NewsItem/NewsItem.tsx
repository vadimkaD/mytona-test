import React, { useEffect } from "react";
import { Card } from "antd";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Image,
  TextPreviewWrap
} from "../News/NewsItemPreview/NewsItemPreview.styled";
import { newsByLink } from "../News/__redux/News.selectors";
import Breadcrumbs from "../common/Breadcrumbs/Breadcrumbs";
import { selectMenuItemLink } from "../HeaderMenu/__redux/HeaderMenu.actions";

export const NewsItem: React.FunctionComponent<{}> = props => {
  const { link } = useParams();
  const item = useSelector(newsByLink(link));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectMenuItemLink("/news"));
  }, []);

  if (!item) return null;

  return (
    <>
      <Breadcrumbs
        redirect={true}
        breadcrumbs={[
          { title: "Home", link: "/" },
          { title: "News", link: "/news" },
          { title: item.title, link: `/news/${item.link}` }
        ]}
      />
      <Card title={item.title}>
        <Image src={item.imageUrl} />
        <h2>{item.title}</h2>
        <TextPreviewWrap>{item.text}</TextPreviewWrap>
      </Card>
    </>
  );
};

export default NewsItem;
