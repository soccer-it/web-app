import { store } from "react-easy-state";
import { observe } from "@nx-js/observer-util";
import setCustomProperties from "utils/setCustomProperties";

export const userConfig = store({
  theme: {}
});

observe(() => {
  setCustomProperties(userConfig.theme);
});
