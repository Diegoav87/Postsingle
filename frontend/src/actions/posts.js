import axios from "axios";
import {
  ADD_POST,
  GET_ERRORS,
  UPDATE_POST,
  GET_POSTS,
  DELETE_POST,
  USER_POSTS,
  GET_POST,
} from "./types";
import { createMessage } from "./messages";
import { tokenConfig } from "./auth";

export const getPosts = () => (dispatch) => {
  axios
    .get("http://127.0.0.1:8000/posts/")
    .then((res) => {
      dispatch({
        type: GET_POSTS,
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

export const getPost = (id) => (dispatch) => {
  axios
    .get(`http://127.0.0.1:8000/posts/post-get/${id}/`)
    .then((res) => {
      dispatch({
        type: GET_POST,
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

export const getUserPosts = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/posts/post-user/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_POSTS,
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

export const addPost = (post) => (dispatch, getState) => {
  axios
    .post(
      "http://127.0.0.1:8000/posts/post-create/",
      post,
      tokenConfig(getState)
    )
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

export const updatePost = (id, post) => (dispatch, getState) => {
  axios
    .post(
      `http://127.0.0.1:8000/posts/post-update/${id}/`,
      post,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch(createMessage({ postUpdated: "Post Updated" }));
      dispatch({
        type: UPDATE_POST,
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
