import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AuthContext } from "../../context/auth";

const Navigation = () => {
  const {
    tokenParent,
    isAuthenticatedParent,
    loadingParent,
    userParent,
  } = useContext(AuthContext);
  const [token, setToken] = tokenParent;
  const [loading, setLoading] = loadingParent;
  const [isAuthenticated, setIsAuthenticated] = isAuthenticatedParent;
  const [user, setUser] = userParent;

  const logoutUser = () => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }

    fetch("http://127.0.0.1:8000/accounts/api/auth/logout", config)
      .then((res) => {
        if (res.ok) {
          localStorage.removeItem("token");
          setToken(null);
          setIsAuthenticated(false);
          setLoading(false);
          setUser(null);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  return <div>{isAuthenticated ? userNav : guestNav}</div>;
};

export default Navigation;
