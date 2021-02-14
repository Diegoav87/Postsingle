import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "./Navbar/Navbar.js";
import { PostProvider } from "../context/posts";
import PostList from "./PostList/PostList.js";
import Alerts from "./Alerts/Alerts";

const Home = () => {
  return (
    <PostProvider>
      <div>
        <Navigation />
        <Container>
          <Alerts />
          <PostList />
        </Container>
      </div>
    </PostProvider>
  );
};

export default Home;
