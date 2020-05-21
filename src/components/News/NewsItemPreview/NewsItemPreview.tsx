import React from "react";
import { Link } from "react-router-dom";
import { NewsItemPreviewProps } from "./NewsItemPreview.types";
import { List } from "antd";
import { CardWrap, Image, TextPreviewWrap } from "./NewsItemPreview.styled";

const NewsItemPreview: React.FunctionComponent<NewsItemPreviewProps> = ({
  item
}) => {
  return (
    <List.Item>
      <Link to={`/news/${item.link}`}>
        <CardWrap title={item.title}>
          <Image src={item.imageUrl} />
          <TextPreviewWrap>{item.textPreview}</TextPreviewWrap>
        </CardWrap>
      </Link>
    </List.Item>
  );
};

export default NewsItemPreview;
