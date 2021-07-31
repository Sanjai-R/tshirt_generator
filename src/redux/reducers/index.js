import { combineReducers } from "redux";
import { settingsreducer } from "./settingsreducer";

export default combineReducers({
  settings: settingsreducer
});
