import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addPost } from "../../actions/posts";

const AddPost = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const bodyChange = (e) => {
    setBody(e.target.value);
  };

  const desChange = (e) => {
    setDescription(e.target.value);
  };

  const addClick = (e) => {
    e.preventDefault();
    const post = { title, body, description };
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
          <Form.Label>Short Description</Form.Label>
          <Form.Control onChange={desChange} type="text" />
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

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
  };
};

export default connect(null, mapDispatchToProps)(AddPost);
