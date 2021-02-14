import { combineReducers } from "redux";
import errors from "./errors";
import posts from "./posts";

export default combineReducers({
  errors,
  posts,
});
