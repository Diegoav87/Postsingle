import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand href="#home">Postsingle</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/dashboard">
          <Nav.Link href="#home">Dashboard</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/login">
          <Nav.Link href="#features">Log In</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/signup">
          <Nav.Link href="#pricing">Sign Up</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
