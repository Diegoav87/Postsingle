import { combineReducers } from "redux";
import errors from "./errors";
import posts from "./posts";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  errors,
  posts,
  messages,
  auth,
});
