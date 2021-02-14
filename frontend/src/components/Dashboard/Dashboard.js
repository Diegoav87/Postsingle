import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../Navbar/Navbar.js";
import AddPost from "../AddPost/AddPost";
import Alerts from "../Alerts/Alerts";

const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Alerts />
        <div>
          <AddPost />
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
