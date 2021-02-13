import axios from "axios";
import { GET_POSTS } from "./types";

export const getPosts = () => (dispatch) => {
  axios
    .get("http://127.0.0.1:8000/posts/")
    .then((res) => {
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
