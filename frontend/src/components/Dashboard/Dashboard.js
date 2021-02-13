import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../Navbar/Navbar.js";
import AddPost from "../AddPost/AddPost";

const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <div>
          <AddPost />
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
