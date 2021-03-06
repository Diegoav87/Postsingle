import React from "react";
import "./Comment.css";
import dateFormat from "dateformat";

const Comment = (props) => {
  return (
    <div className="comment">
      <div className="user-data">
        <i className="fas fa-user mr-2 mt-1"></i>
        <h5>{props.username}</h5>
      </div>
      <div className="date">
        <i className="fas fa-clock mr-2 mt-1"></i>
        <p className="text-secondary">
          {dateFormat(props.created_at, "mmmm dS, yyyy")}
        </p>
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default Comment;
