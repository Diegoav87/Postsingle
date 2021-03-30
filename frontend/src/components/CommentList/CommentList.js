import React, { useEffect, useState } from "react";
import Comment from "./Comment/Comment";
import "./CommentList.css";
import { connect } from "react-redux";
import { configUrl } from "../../Constants";

const CommentList = (props) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const commentChange = (e) => {
    setCommentText(e.target.value);
  };

  useEffect(() => {
    const fetchComments = () => {
      fetch(`${configUrl.url}posts/post-comments/${props.id}/`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setComments(data);
        });
    };
    fetchComments();
  }, []);

  const addComment = () => {
    const token = props.token;

    const config = {
      "Content-Type": "application/json",
    };

    if (token) {
      config["Authorization"] = `Token ${token}`;
    }

    fetch(`${configUrl.url}posts/comment-create/${props.id}/`, {
      method: "POST",
      headers: config,
      body: JSON.stringify({ text: commentText }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const commentList = comments.map((comment) => {
    return (
      <Comment
        username={comment.user}
        text={comment.text}
        created_at={comment.created_at}
        key={comment.id}
      />
    );
  });

  return (
    <div className="comment-list pb-4">
      <div>
        <h3>Comentarios</h3>
      </div>

      {props.isAuthenticated ? (
        <form className="mt-2">
          <textarea
            className="form-control"
            placeholder="Add comment..."
            value={commentText}
            onChange={commentChange}
          ></textarea>
          <button onClick={addComment} type="submit" className="blue-btn mt-2">
            Agregar
          </button>
        </form>
      ) : (
        <p className="text-secondary">
          Inicia sesión para agregar comentarios.
        </p>
      )}
      <hr></hr>
      {commentList}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(CommentList);
