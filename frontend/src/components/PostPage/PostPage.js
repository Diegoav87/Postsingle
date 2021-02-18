import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPost } from "../../actions/posts";
import { useParams } from "react-router-dom";

const PostPage = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.getPost(id);
  }, []);

  return (
    <div>
      <h1>{props.post.title}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    post: state.posts.postDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(getPost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
