import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Navigation from "../Navbar/Navbar";
import dateFormat from "dateformat";

const PostPage = (props) => {
  const { id } = useParams();
  const post = props.posts.find((post) => {
    if (post.id === parseInt(id)) {
      return post;
    }
  });

  return (
    <div>
      <Navigation />
      <div className="container mt-4 mb-4">
        <h1>{post.title}</h1>
        <h6 className="text-muted">{post.description}</h6>
        <p>
          {post.user}{" "}
          <span className="text-secondary">
            {dateFormat(post.created_at, "mmmm dS, yyyy")}
          </span>
        </p>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

export default connect(mapStateToProps)(PostPage);
