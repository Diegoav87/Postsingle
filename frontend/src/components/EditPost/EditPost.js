import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { updatePost, deletePost } from "../../actions/posts";
import Navigation from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import Alerts from "../Alerts/Alerts";
import { useHistory } from "react-router-dom";

const EditPost = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const post = props.posts.find((post) => {
    if (post.id === parseInt(id)) {
      return post;
    }
  });

  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [body, setBody] = useState(post.body);
  const [show, setShow] = useState(false);

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
    history.push("/dashboard");
  };

  const deleteClick = () => {
    setShow(true);
  };

  const handleClose = () => setShow(false);
  const deletePostConfirm = () => {
    props.deletePost(id);
    setShow(false);
    history.push("/dashboard");
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
          <Button className="ml-2" variant="danger" onClick={deleteClick}>
            Delete
          </Button>

          <Modal animation={false} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Deleting a post will permanently remove it from the database.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={handleClose}>
                Keep Post
              </Button>
              <Button variant="danger" onClick={deletePostConfirm}>
                Delete Post
              </Button>
            </Modal.Footer>
          </Modal>
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
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
