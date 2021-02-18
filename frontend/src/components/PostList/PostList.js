import React, { useState, useEffect } from "react";
import "./PostList.css";
import Post from "./Post/Post";
import { connect } from "react-redux";
import { getPosts } from "../../actions/posts";

const PostList = (props) => {
  useEffect(() => {
    props.getPosts();
  }, []);

  const postList = props.posts.map((post) => {
    return (
      <Post
        title={post.title}
        body={post.body}
        created={post.created_at}
        key={post.id}
        id={post.id}
      />
    );
  });

  return <div className="list-grid">{postList}</div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts()),
  };
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
