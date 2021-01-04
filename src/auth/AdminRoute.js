import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

export default function AdminRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated() && isAuthenticated().user.role === 1 ? (
          <Component {...props} />
        ) : isAuthenticated().user.role === 0 ? (
          <Redirect
            to={{
              pathname: "/user/dashboard",
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
