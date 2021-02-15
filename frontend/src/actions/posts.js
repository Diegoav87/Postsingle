import axios from "axios";
import { ADD_POST, GET_ERRORS } from "./types";
import { createMessage } from "./messages";

//Add lead
export const addPost = (post) => (dispatch) => {
  axios
    .post("http://127.0.0.1:8000/posts/post-create/", post)
    .then((res) => {
      dispatch(createMessage({ postAdded: "Post Added" }));
      dispatch({
        type: ADD_POST,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
