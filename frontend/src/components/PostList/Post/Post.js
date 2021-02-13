import React from "react";
import { Card } from "react-bootstrap";
import dateFormat from "dateformat";

const Post = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src="'../../../assets/images/descarga.svg" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
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
