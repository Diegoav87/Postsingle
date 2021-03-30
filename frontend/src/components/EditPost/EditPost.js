import React, { useState, useEffect } from "react";
import { Form, Button, Modal, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { updatePost, deletePost, getPost } from "../../actions/posts";
import Navigation from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import Alerts from "../Alerts/Alerts";
import { useHistory } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditPost = (props) => {
  const history = useHistory();
  const { id } = useParams();

  const [title, setTitle] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [body, setBody] = useState(undefined);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(1);
    props.getPost(id);
    if (props.post.title !== title) {
      setTitle(props.post.title);
      setDescription(props.post.description);
      setBody(props.post.body);
    }
  }, [props.post.title]);

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
    props.deletePost(id, props.user);
    setShow(false);
    history.push("/dashboard");
  };

  return (
    <div>
      <Navigation />
      {title === undefined ? (
        <div className="centered">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="mt-4 container pb-4">
          <h2 className="add-post-title">Editar Artículo</h2>
          <Alerts />
          <Form>
            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control onChange={titleChange} type="text" value={title} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción Corta</Form.Label>
              <Form.Control
                onChange={desChange}
                type="text"
                value={description}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Cuerpo</Form.Label>
              <CKEditor
                data={body}
                editor={ClassicEditor}
                config={{
                  toolbar: [
                    "heading",
                    "|",
                    "bold",
                    "italic",
                    "|",
                    "link",
                    "bulletedList",
                    "numberedList",
                    "|",
                    "undo",
                    "redo",
                  ],
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setBody(data);
                }}
              />
            </Form.Group>
            <Button onClick={updateClick} variant="primary" type="submit">
              Editar
            </Button>
            <Button className="ml-2" variant="danger" onClick={deleteClick}>
              Borrar
            </Button>

            <Modal animation={false} show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Borrar Artículo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Borrar un artículo lo eliminará permanentemente de la base de
                datos.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                  Mantener Artículo
                </Button>
                <Button variant="danger" onClick={deletePostConfirm}>
                  Borrar Artículo
                </Button>
              </Modal.Footer>
            </Modal>
          </Form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    post: state.posts.postDetail,
    user: state.auth.user.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (id, post) => dispatch(updatePost(id, post)),
    deletePost: (id, user) => dispatch(deletePost(id, user)),
    getPost: (id) => dispatch(getPost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
