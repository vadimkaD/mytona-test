import React from "react";
import { Menu } from "antd";
import { useDispatch } from "react-redux";
import { ClickParam } from "antd/lib/menu";
import { logout } from "../Auth/__redux/Auth.actions";

const HeaderDropdownMenu: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const onExitClick = (e: ClickParam) => dispatch(logout());

  return (
    <Menu>
      <Menu.Item disabled={true}>Недоступный пункт меню</Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={onExitClick}>Выйти</Menu.Item>
    </Menu>
  );
};

export default HeaderDropdownMenu;
