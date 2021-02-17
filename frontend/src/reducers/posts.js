import { ADD_POST, UPDATE_POST, GET_POSTS, USER_POSTS } from "../actions/types";

const initialState = {
  posts: [],
  userPosts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        userPosts: [...state.userPosts, action.payload],
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.id) {
            return { ...post, ...action.payload };
          }
          return post;
        }),
      };
    case USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
      };
    default:
      return state;
  }
}
