import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import "./Navbar.css";

const Navigation = (props) => {
  const [open, setOpen] = useState(false);

  const logoutUser = () => {
    props.logout();
  };

  const handleBurgerClick = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const { isAuthenticated, user } = props.auth;

  const userNav = (
    <nav>
      <div className="nav-container">
        <Link className="link" to="/">
          <h4 id="brand">Postsingle</h4>
        </Link>
        <ul id="wide-links">
          <li>
            <Link className="link" to="/dashboard">
              Tablero
            </Link>
          </li>
          <li>
            <a className="link" onClick={logoutUser} href="#logout">
              Cerrar Sesión
            </a>
          </li>
        </ul>
        <div
          className={open ? "menu-btn open" : "menu-btn"}
          onClick={handleBurgerClick}
        >
          <div className="menu-btn-burger"></div>
        </div>
      </div>
    </nav>
  );

  const guestNav = (
    <nav>
      <div className="nav-container">
        <Link className="link" to="/">
          <h4 id="brand">Postsingle</h4>
        </Link>
        <ul id="wide-links">
          <li>
            <Link className="link" to="/login">
              Iniciar Sesión
            </Link>
          </li>
          <li>
            <Link className="link" to="/signup">
              Registrarse
            </Link>
          </li>
        </ul>
        <div
          className={open ? "menu-btn open" : "menu-btn"}
          onClick={handleBurgerClick}
        >
          <div className="menu-btn-burger"></div>
        </div>
      </div>
    </nav>
  );

  return (
    <div>
      {open ? (
        <div className="overlay" style={{ display: "block" }}></div>
      ) : (
        <div className="overlay" style={{ display: "none" }}></div>
      )}
      {isAuthenticated ? userNav : guestNav}
      <div
        className="side-menu"
        style={open ? { left: "50%" } : { left: "100%" }}
      >
        {isAuthenticated ? (
          <ul className="menu-list">
            <li>
              <Link className="link" to="/dashboard">
                Tablero
              </Link>
            </li>
            <li>
              <a className="link" onClick={logoutUser} href="#logout">
                Cerrar Sesión
              </a>
            </li>
          </ul>
        ) : (
          <ul className="menu-list">
            <li>
              <Link className="link" to="/login">
                Iniciar Sesión
              </Link>
            </li>
            <li>
              <Link className="link" to="/signup">
                Registrarse
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
