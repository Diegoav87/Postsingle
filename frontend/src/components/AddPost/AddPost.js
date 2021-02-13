import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddPost = () => {
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
    console.log(title, body);
    fetch("http://127.0.0.1:8000/posts/post-create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, body: body }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
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

export default AddPost;
