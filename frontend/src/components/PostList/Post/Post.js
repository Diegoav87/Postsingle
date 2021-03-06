import React from "react";
import { Card } from "react-bootstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Post.css";
import person from "../../../assets/images/person.svg";

const Post = (props) => {
  return (
    // <Card className="post-block">
    //   <Card.Body>
    //     <Link to={`/post/${props.id}`}>
    //       <Card.Title id="card-title">{props.title}</Card.Title>
    //     </Link>
    //     <Card.Text className="text-secondary">{props.description}</Card.Text>
    //   </Card.Body>
    //   <Card.Footer>
    //     <div className="d-flex justify-content-between">
    //       <small className="text-muted">
    //         {dateFormat(props.created, "mmmm dS, yyyy")}
    //       </small>
    //       {props.postUser === props.user ? (
    //         <Link to={`/edit/${props.id}`}>
    //           <i className="fas fa-edit" style={{ color: "grey" }}></i>
    //         </Link>
    //       ) : null}
    //     </div>
    //   </Card.Footer>
    // </Card>
    <Link className="post-link" to={`/post/${props.id}`}>
      <div className="post-block">
        <div className="number">
          <h2>{`0${props.index + 1}`}</h2>
        </div>
        <div className="post-info">
          <div className="post-owner">
            <img src={person} />
            <p>{props.postUser}</p>
          </div>
          <h6 className="post-title">{props.title}</h6>
          <div className="edit-post-link">
            <p className="post-date">
              {dateFormat(props.created, "mmmm dS, yyyy")}
            </p>
            {props.postUser === props.user ? (
              <Link to={`/edit/${props.id}`}>
                <i className="fas fa-edit" style={{ color: "grey" }}></i>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
};

const mapStateToProps = (state) => {
  if (state.auth.isAuthenticated) {
    return {
      user: state.auth.user.username,
    };
  } else {
    return {};
  }
};

export default connect(mapStateToProps)(Post);
