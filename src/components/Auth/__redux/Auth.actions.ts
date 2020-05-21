import { createAction } from "deox";

const namespace = "[Auth]";

export const logout = createAction(`${namespace} logout`);
