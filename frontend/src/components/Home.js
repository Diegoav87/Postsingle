import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "./Navbar/Navbar.js";

import PostList from "./PostList/PostList.js";
import Alerts from "./Alerts/Alerts";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Alerts />
      <PostList />
    </div>
  );
};

export default Home;
