import { combineReducers, configureStore } from "/vendor/.vite-deps-@reduxjs_toolkit.js__v--bfcbcd02.js";
import { sliceLogin } from "/src/redux/slice-login.ts.js";
import { sliceSettings } from "/src/redux/slice-settings.ts.js";
const reducer = combineReducers({
  [sliceLogin.name]: sliceLogin.reducer,
  [sliceSettings.name]: sliceSettings.reducer
});
export const store = configureStore({ reducer });
