import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../Navbar/Navbar.js";
import AddPost from "../AddPost/AddPost";
import Alerts from "../Alerts/Alerts";
import UserPosts from "./UserPosts/UserPosts";

const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Alerts />
        <div>
          <AddPost />
          <UserPosts />
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
