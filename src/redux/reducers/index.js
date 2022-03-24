import { combineReducers } from "redux";
import UsersDataReducer from "./UsersDataReducer";

export default combineReducers({
  data: UsersDataReducer
})