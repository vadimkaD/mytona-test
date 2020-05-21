import styled from "styled-components";
import { Layout } from "antd";

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

export const ContentWrap = styled(Layout.Content)`
  padding: 20px 40px 40px;
  display: flex;
  flex-direction: column;
`;

export const PageWrap = styled.div`
  background: #fff;
  flex: 1;
`;
