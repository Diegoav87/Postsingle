import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "./Navbar/Navbar.js";
import { PostProvider } from "../context/posts";
import PostList from "./PostList/PostList.js";

const Home = () => {
  return (
    <PostProvider>
      <div>
        <Navigation />
        <Container>
          <PostList />
        </Container>
      </div>
    </PostProvider>
  );
};

export default Home;
