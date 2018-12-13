import userReducer from "./userReducer";
import userInfoReducer from "./userInfoReducer";
import interfaceReducer from "./interfaceReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  users: userReducer, // updates info on the product
  user: userInfoReducer,
  ui: interfaceReducer
});

export default allReducers;
