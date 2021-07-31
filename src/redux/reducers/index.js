import { combineReducers } from "redux";

import { settingsreducer } from "./settingsreducer";
import {typereducer} from "./typereducer";
export default combineReducers({
  settings: settingsreducer,
  type: typereducer,
});