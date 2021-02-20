import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { updatePost } from "../../actions/posts";
import Navigation from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import Alerts from "../Alerts/Alerts";

const EditPost = (props) => {
  const { id } = useParams();
  const post = props.posts.find((post) => {
    if (post.id === parseInt(id)) {
      return post;
    }
  });

  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [body, setBody] = useState(post.body);

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const bodyChange = (e) => {
    setBody(e.target.value);
  };

  const desChange = (e) => {
    setDescription(e.target.value);
  };

  const updateClick = (e) => {
    e.preventDefault();
    const post = { title, body, description };
    props.updatePost(id, post);
  };

  return (
    <div>
      <Navigation />
      <div className="mt-4 container">
        <h1>Edit Post</h1>
        <Alerts />
        <Form>
          <Form.Group>
            <Form.Label>Post Title</Form.Label>
            <Form.Control onChange={titleChange} type="text" value={title} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Short Description</Form.Label>
            <Form.Control
              onChange={desChange}
              type="text"
              value={description}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Body</Form.Label>
            <Form.Control
              onChange={bodyChange}
              as="textarea"
              rows={3}
              value={body}
            />
          </Form.Group>
          <Button onClick={updateClick} variant="primary" type="submit">
            Edit
          </Button>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (id, post) => dispatch(updatePost(id, post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
