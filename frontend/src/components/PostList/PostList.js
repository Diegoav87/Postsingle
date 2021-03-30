import React, { useState, useEffect } from "react";
import "./PostList.css";
import Post from "./Post/Post";
import { connect } from "react-redux";
import { getPosts } from "../../actions/posts";
import { Link } from "react-router-dom";

const PostList = (props) => {
  useEffect(() => {
    props.getPosts();
  }, []);

  const postList = props.posts.map((post, index) => {
    return (
      <Post
        title={post.title}
        index={index}
        body={post.body}
        created={post.created_at}
        key={post.id}
        postUser={post.user}
        id={post.id}
        description={post.description}
      />
    );
  });

  return (
    <div className="main-container">
      <div className="showcase">
        <div className="overlay-s"></div>
        <div className="showcase-container">
          <h1>Expresa tus ideas</h1>
          <p>
            Lee y escribe sobre cualquier tema. Eres libre de expresar tus
            ideas.
          </p>
          <Link className="link blue-btn" to="/signup">
            Comenzar
          </Link>
        </div>
      </div>
      <div className="content-container">
        <h3>Todos los Artículos</h3>
        <div className="top-post-list">{postList}</div>
      </div>
    </div>
  );
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
