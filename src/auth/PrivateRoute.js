import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../todo/context/ProvideAuth";

export default function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuth();
  const {
    auth: {
      user: { _id, email, name, role },
    },
  } = auth;
  return (
    <Route
      {...rest}
      render={props => {
        return _id && role === 0 ? (
          <Component {...props} />
        ) : _id && role === 1 ? (
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
