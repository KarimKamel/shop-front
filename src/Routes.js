import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./user/SignUp";
import SignIn from "./user/SignIn";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";
import UserDashboard from "./user/UserDashboard";
import AdminDashboard from "./user/AdminDashboard";
import { ProvideAuth } from "./todo/context/ProvideAuth";

export default function Routes() {
  return (
    <BrowserRouter>
      <ProvideAuth>
        <Switch>
          <Route path="/signin" exact component={SignIn} />
          <Route path="/" exact component={Home} />
          <Route path="/signUp" exact component={SignUp} />
          <PrivateRoute
            path="/user/dashboard"
            exact
            component={UserDashboard}
          />
          <AdminRoute
            path="/admin/dashboard"
            exact
            component={AdminDashboard}
          />
        </Switch>
      </ProvideAuth>
    </BrowserRouter>
  );
}
