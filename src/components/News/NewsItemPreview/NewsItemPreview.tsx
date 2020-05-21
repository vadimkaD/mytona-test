import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NewsItemPreviewProps } from "./NewsItemPreview.types";
import { List } from "antd";
import { CardWrap, Image, TextPreviewWrap } from "./NewsItemPreview.styled";
import { loading as loadingSelector } from "../__redux/News.selectors";

const NewsItemPreview: React.FunctionComponent<NewsItemPreviewProps> = ({
  item
}) => {
  const loading = useSelector(loadingSelector);

  return (
    <List.Item>
      <Link to={`/news/${item.link}`}>
        <CardWrap title={item.title} loading={loading}>
          <Image src={item.imageUrl} />
          <TextPreviewWrap>{item.textPreview}</TextPreviewWrap>
        </CardWrap>
      </Link>
    </List.Item>
  );
};

export default NewsItemPreview;
