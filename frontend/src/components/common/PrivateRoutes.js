import React, { Component, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    tokenParent,
    isAuthenticatedParent,
    loadingParent,
    userParent,
  } = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = isAuthenticatedParent;
  const [loading, setLoading] = loadingParent;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading) {
          return <h2>Loading...</h2>;
        } else if (!isAuthenticated) {
          return <Redirect to="/login" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
