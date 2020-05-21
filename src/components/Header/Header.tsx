import React from "react";
import { Avatar, Col, Dropdown, Layout, Row } from "antd";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { menuItems } from "../HeaderMenu/HeaderMenu.constants";
import {
  PointerCursorWrap,
  RightAlignedHeaderColContent
} from "../AppContent/AppContent.styled";
import HeaderDropdownMenu from "../HeaderDropdownMenu/HeaderDropdownMenu";
import { UserOutlined } from "@ant-design/icons";

const { Header: LayoutHeader } = Layout;

const Header: React.FunctionComponent<{}> = () => {
  return (
    <LayoutHeader>
      <Row>
        <Col span={20}>
          <HeaderMenu items={menuItems} />
        </Col>
        <Col span={4}>
          <RightAlignedHeaderColContent>
            <Dropdown
              overlay={() => <HeaderDropdownMenu />}
              placement="bottomRight"
            >
              <PointerCursorWrap>
                <Avatar icon={<UserOutlined />} />
              </PointerCursorWrap>
            </Dropdown>
          </RightAlignedHeaderColContent>
        </Col>
      </Row>
    </LayoutHeader>
  );
};

export default Header;
