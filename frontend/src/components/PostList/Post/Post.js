import React from "react";
import { Card } from "react-bootstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <Card>
      <Card.Body>
        <Link to={`/post/${props.id}`}>
          <Card.Title>{props.title}</Card.Title>
        </Link>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          {dateFormat(props.created, "mmmm dS, yyyy")}
        </small>
      </Card.Footer>
    </Card>
  );
};

export default Post;
