import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Navigation from "../Navbar/Navbar";
import dateFormat from "dateformat";
import { getPost } from "../../actions/posts";
import { Spinner } from "react-bootstrap";
import parse from "html-react-parser";
import CommentList from "../CommentList/CommentList";
import "./PostPage.css";
import Footer from "../Footer/Footer";

const PostPage = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [body, setBody] = useState(undefined);
  const [createdAt, setCreatedAt] = useState(undefined);
  const [user, setPostUser] = useState(undefined);

  useEffect(() => {
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
        <div className="post-wrapper">
          <div className="post-container pt-4 pb-4">
            <h1 className="post-heading">{title}</h1>
            <h6 className="text-muted">{description}</h6>
            <p className="user">
              {user}{" "}
              <span className="text-secondary ml-2">
                {dateFormat(createdAt, "mmmm dS, yyyy")}
              </span>
            </p>
            <div style={{ textAlign: "justify" }}>{parse(body)}</div>
          </div>
          <CommentList id={id} />
        </div>
      )}
      <Footer />
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
