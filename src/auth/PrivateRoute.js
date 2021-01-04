import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated() && isAuthenticated().user.role === 0 ? (
          <Component {...props} />
        ) : isAuthenticated() && isAuthenticated().user.role === 1 ? (
          <Redirect
            to={{
              pathname: "/admin/dashboard",
              state: { from: props.location },
            }}
          />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        );
      }}
    />
  );
}
