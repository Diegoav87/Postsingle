import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Navigation from "../Navbar/Navbar";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import Alerts from "../Alerts/Alerts";
import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLoginClick = (e) => {
    e.preventDefault();
    loginUser();
  };

  const loginUser = (e) => {
    props.login(username, password);
  };

  if (props.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="wrapper">
      <Navigation />

      <div className="background">
        <div className="form-container">
          <h1 className="mb-4">INICIAR SESIÓN</h1>
          <Alerts />
          <form method="POST">
            <div className="mb-4">
              <label htmlFor="username">Nombre de Usuario</label>
              <input
                className="form-input"
                type="text"
                name="username"
                value={username}
                onChange={onUsernameChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password">Contraseña</label>
              <input
                className="form-input"
                type="password"
                name="password"
                value={password}
                onChange={onPasswordChange}
              />
            </div>
            <button className="submit-btn" type="submit" onClick={onLoginClick}>
              INICIAR SESIÓN
            </button>
            <p className="mt-4">
              No tienes cuenta? <Link to="/signup">Registrarse</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
