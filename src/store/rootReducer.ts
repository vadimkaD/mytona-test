import { combineReducers } from "redux";
import set from "lodash/set";
import merge from "lodash/merge";
import { FilenameConventionError } from "./FilenameConventionError";
import { Exported } from "./types";

const allStores = require.context(
  "../components",
  true,
  /__redux\/.*\.store\.tsx?$/
);

const reducers: Exported = {};

function combineNested(reducer: Exported): any {
  const keys = Object.keys(reducer);

  if (keys.every(key => typeof reducer[key] === "function")) {
    return combineReducers(reducer);
  }

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (typeof reducer[key] === "object") {
      reducer[key] = combineNested(reducer[key]);
    }
  }

  return combineNested(reducer);
}

allStores.keys().forEach(function(key) {
  const mod = allStores(key);

  const splited = key.split("/").filter(key => key !== ".");
  const filename = splited[splited.length - 1];
  const path = splited
    .slice(0, -1)
    .filter(key => key !== "__redux")
    .join(".");
  const extended: Exported = {};
  const prepared = filename.split(".");
  const fNamespace = prepared[0];
  const dNamespace = path.split(".").pop();
  if (fNamespace !== dNamespace) {
    throw new FilenameConventionError(filename, path, "store");
  }
  set(extended, path, { ...mod });
  merge(reducers, extended);
});

export default combineNested(reducers);
