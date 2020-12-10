import { combineReducers } from "redux";

import { pannelReducer } from "./Panel/panelReducer";

const rootReducer = combineReducers({
  pannel: pannelReducer,
});

export default rootReducer;
