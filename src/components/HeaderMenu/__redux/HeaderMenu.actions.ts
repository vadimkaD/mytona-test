import { createAction } from "deox";

const namespace = "[HeaderMenu]";

export const selectMenuItemLink = createAction(
  `${namespace} select menu item link`,
  resolve => (link: string) => resolve(link)
);
