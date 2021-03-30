import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserPosts } from "../../../actions/posts";
import Post from "../../PostList/Post/Post";

const UserPosts = (props) => {
  useEffect(() => {
    props.getUserPosts();
  }, []);

  const postList = props.userPosts.map((post, index) => {
    return (
      <Post
        title={post.title}
        body={post.body}
        created={post.created_at}
        key={post.id}
        id={post.id}
        description={post.description}
        postUser={post.user}
        index={index}
      />
    );
  });

  return (
    <div className="top-post-list">
      {postList}
      <div></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userPosts: state.posts.userPosts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getUserPosts: () => dispatch(getUserPosts()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
