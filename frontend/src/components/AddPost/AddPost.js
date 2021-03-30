import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addPost } from "../../actions/posts";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
    setTitle("");
    setDescription("");
    setBody("");
  };

  return (
    <div className="mt-4 mb-4">
      <h2 className="add-post-title">Agregar Artículo</h2>
      <Form>
        <Form.Group>
          <Form.Label>Título</Form.Label>
          <Form.Control onChange={titleChange} type="text" value={title} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripción Corta</Form.Label>
          <Form.Control onChange={desChange} type="text" value={description} />
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
        <button onClick={addClick} className="blue-btn">
          Agregar
        </button>
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
