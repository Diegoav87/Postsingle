import React from "react";
import { Card } from "react-bootstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Post.css";

const Post = (props) => {
  return (
    <Card>
      <Card.Body>
        <Link to={`/post/${props.id}`}>
          <Card.Title id="card-title">{props.title}</Card.Title>
        </Link>
        <Card.Text className="text-secondary">{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="d-flex justify-content-between">
          <small className="text-muted">
            {dateFormat(props.created, "mmmm dS, yyyy")}
          </small>
          {props.postUser === props.user ? (
            <Link to={`/edit/${props.id}`}>
              <i className="fas fa-edit" style={{ color: "grey" }}></i>
            </Link>
          ) : null}
        </div>
      </Card.Footer>
    </Card>
  );
};

const mapStateToProps = (state) => {
  if (state.auth.isAuthenticated) {
    return {
      user: state.auth.user.username,
    };
  } else {
    return {};
  }
};

export default connect(mapStateToProps)(Post);
