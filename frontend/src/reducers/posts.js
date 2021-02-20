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
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        userPosts: state.posts.filter((post) => post.id !== action.payload),
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
        userPosts: state.posts.map((post) => {
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
    // case GET_POST:
    //   return {
    //     ...state,
    //     postDetail: action.payload,
    //   };
    default:
      return state;
  }
}
