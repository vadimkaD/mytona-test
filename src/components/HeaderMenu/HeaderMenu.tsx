import React from "react";
import { Menu as AntdMenu } from "antd";
import { MenuProps } from "./HeaderMenu.types";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { currentMenuItemLink as itemSelector } from "./__redux/HeaderMenu.selectors";
import { selectMenuItemLink } from "./__redux/HeaderMenu.actions";

const HeaderMenu: React.FunctionComponent<MenuProps> = ({ items }) => {
  const dispatch = useDispatch();
  const currentMenuItemLink = useSelector(itemSelector);
  const onClick = (link: string) => (e: React.SyntheticEvent) =>
    dispatch(selectMenuItemLink(link));

  return (
    <AntdMenu
      theme="dark"
      mode="horizontal"
      selectedKeys={[currentMenuItemLink]}
    >
      {items.map(item => {
        return (
          <AntdMenu.Item key={item.link}>
            <Link to={item.link} onClick={onClick(item.link)}>
              {item.title}
            </Link>
          </AntdMenu.Item>
        );
      })}
    </AntdMenu>
  );
};

export default HeaderMenu;
