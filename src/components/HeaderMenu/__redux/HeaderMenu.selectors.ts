import { HeaderMenuState } from "../HeaderMenu.types";

export const currentMenuItemLink = (state: HeaderMenuState): string =>
  state.HeaderMenu.currentMenuItemLink;
