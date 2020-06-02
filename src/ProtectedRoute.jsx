import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("login") === null ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    }
  />
);
export default ProtectedRoute;
