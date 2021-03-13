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
import { config } from "../Constants";

export const getPosts = () => (dispatch) => {
  axios
    .get(`${config.url}posts/`)
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
    .get(`${config.url}posts/post-get/${id}/`)
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
    .get(`${config.url}posts/post-user/`, tokenConfig(getState))
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
    .post(`${config.url}posts/post-create/`, post, tokenConfig(getState))
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
    .post(`${config.url}posts/post-update/${id}/`, post, tokenConfig(getState))
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

export const deletePost = (id, user) => (dispatch, getState) => {
  axios
    .delete(`${config.url}posts/post-delete/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ postDeleted: "Post Deleted" }));
      dispatch({
        type: DELETE_POST,
        payload: res.data,
        user: user,
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
