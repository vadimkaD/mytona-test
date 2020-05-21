import styled from "styled-components";
import { Card } from "antd";

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const CardWrap = styled(Card)`
  max-width: 360px;
  .ant-card-body {
    padding: 0;
  }
`;

export const TextPreviewWrap = styled.p`
  padding: 24px;
`;
