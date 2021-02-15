import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navigation = (props) => {
  const logoutUser = () => {
    props.logout();
  };

  const { isAuthenticated, user } = props.auth;

  const userNav = (
    <Navbar bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand href="#home">Postsingle</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/dashboard">
          <Nav.Link href="#home">Dashboard</Nav.Link>
        </LinkContainer>
        <Nav.Link onClick={logoutUser} href="#logout">
          Logout
        </Nav.Link>
      </Nav>
    </Navbar>
  );

  const guestNav = (
    <Navbar bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand href="#home">Postsingle</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/login">
          <Nav.Link href="#features">Log In</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/signup">
          <Nav.Link href="#pricing">Sign Up</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );

  return <div>{isAuthenticated ? userNav : guestNav}</div>;
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

Navigation.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { logout })(Navigation);
