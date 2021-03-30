import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Navigation from "../Navbar/Navbar.js";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import Alerts from "../Alerts/Alerts";
import "./Signup.css";
import "../Login/Login.css";
import Footer from "../Footer/Footer";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onPassword2Change = (e) => {
    setPassword2(e.target.value);
  };

  const onSignupClick = (e) => {
    e.preventDefault();
    props.register(username, email, password, password2);
  };

  if (props.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <Navigation />

      <div className="background">
        <div className="register-container">
          <h1 className="mb-4">REGISTRARSE</h1>
          <Alerts />
          <form method="POST">
            <div className="row mb-4">
              <div className="col">
                <label htmlFor="username">Nombre de Usuario</label>
                <input
                  className="form-input"
                  type="text"
                  value={username}
                  onChange={onUsernameChange}
                  name="username"
                />
              </div>
              <div className="col">
                <label htmlFor="email">Correo</label>
                <input
                  className="form-input"
                  type="email"
                  value={email}
                  onChange={onEmailChange}
                  name="email"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <label htmlFor="password">Contraseña</label>
                <input
                  className="form-input"
                  type="password"
                  value={password}
                  onChange={onPasswordChange}
                  name="password"
                />
              </div>
              <div className="col">
                <label htmlFor="password2">Confirmar Contraseña</label>
                <input
                  className="form-input"
                  type="password"
                  value={password2}
                  onChange={onPassword2Change}
                  name="password2"
                />
              </div>
            </div>

            <button
              type="submit"
              className="submit-btn register-btn"
              onClick={onSignupClick}
            >
              REGISTRARSE
            </button>
            <p className="mt-4">
              Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
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
    register: (username, email, password, password2) =>
      dispatch(register(username, email, password, password2)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
