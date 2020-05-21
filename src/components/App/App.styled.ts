import styled from "styled-components";
import { Layout, Col } from "antd";

export const FullHeightLayout = styled(Layout)`
  min-height: 100vh;
`;

export const RightAlignedHeaderColContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;

export const PointerCursorWrap = styled.div`
  cursor: pointer;
`;
