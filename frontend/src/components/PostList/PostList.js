import React, { useState, useEffect, useContext } from "react";
import "./PostList.css";
import { PostContext } from "../../context/posts";
import Post from "./Post/Post";

const PostList = (props) => {
  const [posts, setPosts] = useContext(PostContext);

  const getPosts = () => {
    fetch("http://127.0.0.1:8000/posts/")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const postList = posts.map((post) => {
    return (
      <Post
        title={post.title}
        body={post.body}
        created={post.created_at}
        key={post.id}
      />
    );
  });

  return <div className="list-grid">{postList}</div>;
};

// const mapStateToProps = (state) => ({
//   posts: state.posts.posts,
// });

// PostList.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default PostList;
