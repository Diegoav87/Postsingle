import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";
import Navigation from "../Navbar/Navbar";
import { AuthContext } from "../../context/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {
    tokenParent,
    isAuthenticatedParent,
    loadingParent,
    userParent,
  } = useContext(AuthContext);
  const [token, setToken] = tokenParent;
  const [isAuthenticated, setIsAuthenticated] = isAuthenticatedParent;
  const [loading, setLoading] = loadingParent;
  const [user, setUser] = userParent;

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLoginClick = () => {
    loginUser();
  };

  const loginUser = () => {
    fetch("http://127.0.0.1:8000/accounts/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          localStorage.removeItem("token");
          setToken(null);
          setIsAuthenticated(false);
          setLoading(false);
          setUser(null);
          return undefined;
        }
      })
      .then((data) => {
        if (data !== undefined) {
          console.log("success");
          setToken(data["token"]);
          setIsAuthenticated(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <Navigation />
      <Container>
        <Row>
          <Col md="4">
            <h1>Login</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={username}
                  onChange={onUsernameChange}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Your password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={onPasswordChange}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button color="primary" onClick={onLoginClick}>
              Login
            </Button>
            <p className="mt-2">
              Don't have account? <Link to="/signup">Signup</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
