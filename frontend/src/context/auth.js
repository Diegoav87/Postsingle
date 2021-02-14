import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");

  return (
    <AuthContext.Provider
      value={{
        tokenParent: [token, setToken],
        isAuthenticatedParent: [isAuthenticated, setIsAuthenticated],
        loadingParent: [loading, setLoading],
        userParent: [user, setUser],
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
