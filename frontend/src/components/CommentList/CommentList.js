import React, { useEffect, useState } from "react";
import Comment from "./Comment/Comment";
import "./CommentList.css";
import { connect } from "react-redux";

const CommentList = (props) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const commentChange = (e) => {
    setCommentText(e.target.value);
  };

  useEffect(() => {
    const fetchComments = () => {
      fetch(`http://127.0.0.1:8000/posts/post-comments/${props.id}/`)
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

    fetch(`http://127.0.0.1:8000/posts/comment-create/${props.id}/`, {
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
    <div className="comment-list">
      <div>
        <h3>Comments</h3>
      </div>

      <form className="mt-2">
        <textarea
          className="form-control"
          placeholder="Add comment..."
          value={commentText}
          onChange={commentChange}
        ></textarea>
        <button
          onClick={addComment}
          type="submit"
          className="btn btn-primary mt-2"
        >
          Add
        </button>
      </form>
      <hr></hr>
      {commentList}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(CommentList);
