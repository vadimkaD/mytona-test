import { createReducer } from "deox";
import { selectMenuItemLink } from "./HeaderMenu.actions";
import { menuItems } from "../HeaderMenu.constants";

const current = menuItems.find(item => window.location.pathname === item.link);

export const currentMenuItemLink = createReducer(
  current ? current.link : ("" as string),
  handleAction => [
    handleAction(selectMenuItemLink, (state, { payload }) => payload)
  ]
);
