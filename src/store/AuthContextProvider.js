import React, { useState } from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const loginHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  const userIsLoggedIn = !!token;
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: loginHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
