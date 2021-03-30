import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../Navbar/Navbar.js";
import AddPost from "../AddPost/AddPost";
import Alerts from "../Alerts/Alerts";
import UserPosts from "./UserPosts/UserPosts";
import "./Dashboard.css";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Alerts />
        <div className="dashboard-container">
          <AddPost />
          <h2 className="add-post-title">Tus Artículos</h2>
          <UserPosts />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Dashboard;
