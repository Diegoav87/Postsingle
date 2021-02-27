import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Navigation from "../Navbar/Navbar";
import dateFormat from "dateformat";
import { getPost } from "../../actions/posts";
import { Spinner } from "react-bootstrap";
import parse from "html-react-parser";

const PostPage = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState(props.post.title);
  const [description, setDescription] = useState(props.post.description);
  const [body, setBody] = useState(props.post.body);
  const [createdAt, setCreatedAt] = useState(props.post.created_at);
  const [user, setPostUser] = useState(props.post.user);

  useEffect(() => {
    console.log(1);
    props.getPost(id);
    if (props.post.title !== title) {
      setTitle(props.post.title);
      setDescription(props.post.description);
      setBody(props.post.body);
      setCreatedAt(props.post.created_at);
      setPostUser(props.post.user);
    }
  }, [props.post.title]);

  return (
    <div>
      <Navigation />
      {title === undefined ? (
        <div className="centered">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="container mt-4 mb-4">
          <h1>{title}</h1>
          <h6 className="text-muted">{description}</h6>
          <p>
            {user}{" "}
            <span className="text-secondary">
              {dateFormat(createdAt, "mmmm dS, yyyy")}
            </span>
          </p>
          <div>{parse(body)}</div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    post: state.posts.postDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(getPost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
