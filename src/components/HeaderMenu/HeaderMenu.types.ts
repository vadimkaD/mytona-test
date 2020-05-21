export type MenuItem = {
  title: string;
  link: string;
};

export interface MenuProps {
  items: MenuItem[];
}

export interface HeaderMenuState {
  HeaderMenu: {
    currentMenuItemLink: string;
  };
}
