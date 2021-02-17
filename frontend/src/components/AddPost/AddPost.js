import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPost } from "../../actions/posts";

const AddPost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const bodyChange = (e) => {
    setBody(e.target.value);
  };

  const addClick = (e) => {
    e.preventDefault();
    const post = { title, body };
    props.addPost(post);
  };

  return (
    <div className="mt-4">
      <h1>Add Post</h1>
      <Form>
        <Form.Group>
          <Form.Label>Post Title</Form.Label>
          <Form.Control onChange={titleChange} type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Body</Form.Label>
          <Form.Control onChange={bodyChange} as="textarea" rows={3} />
        </Form.Group>
        <Button onClick={addClick} variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

AddPost.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(AddPost);
