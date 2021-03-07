import {
  ADD_POST,
  UPDATE_POST,
  GET_POSTS,
  USER_POSTS,
  GET_POST,
  DELETE_POST,
} from "../actions/types";

const initialState = {
  posts: [],
  userPosts: [],
  postDetail: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        postDetail: {},
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        userPosts: [...state.userPosts, action.payload],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(
          (post) => post.id !== parseInt(action.payload)
        ),
        userPosts: state.userPosts.filter(
          (post) => post.id !== parseInt(action.payload)
        ),
      };
    case UPDATE_POST:
      const newPosts = state.posts.map((post) => {
        if (post.id === parseInt(action.payload.id)) {
          return { ...post, ...action.payload };
        }
        return post;
      });
      const newUserPosts = state.userPosts.map((post) => {
        if (post.id === parseInt(action.payload.id)) {
          return { ...post, ...action.payload };
        }
        return post;
      });
      return {
        ...state,
        posts: newPosts,
        userPosts: newUserPosts,
      };
    case USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
        postDetail: {},
      };
    case GET_POST:
      return {
        ...state,
        postDetail: action.payload,
      };
    default:
      return state;
  }
}
