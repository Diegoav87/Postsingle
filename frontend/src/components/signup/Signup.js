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

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSignupClick = () => {
    console.log(username + password);
  };

  return (
    <Container>
      <Row>
        <Col md="4">
          <h1>Sign up</h1>
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
          <Button color="primary" onClick={onSignupClick}>
            Sign up
          </Button>
          <p className="mt-2">
            Already have account? <Link to="/login">Login</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
