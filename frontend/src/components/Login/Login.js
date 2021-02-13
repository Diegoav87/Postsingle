import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";
import Navigation from "../Navbar/Navbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLoginClick = () => {
    console.log(username);
  };

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
