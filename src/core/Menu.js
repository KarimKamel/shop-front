import { Link, withRouter } from "react-router-dom";
import React from "react";

import { useAuth } from "../todo/context/ProvideAuth";

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: "#FF9900" };
  return { color: "white" };
};

export default withRouter(function Menu(props) {
  const auth = useAuth();
  const {
    auth: {
      user: { _id, email, name, role },
    },
  } = auth;
  const history = props.history;
  const userType = _id && role === 1 ? "admin" : "user";
  console.log(userType);
  const dashBoardLink = () => {
    if (userType === "admin") return "/admin/dashboard";

    return "/user/dashboard";
  };

  return (
    <div>
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item ml-3">
          <Link className="nav-link" style={isActive(history, "/")} to="/">
            Home
          </Link>
        </li>
        {_id && role === 0 && (
          <li className="nav-item ml-3">
            <Link
              className="nav-link"
              style={isActive(history, "/user/dashboard")}
              to={dashBoardLink()}>
              Dashboard
            </Link>
          </li>
        )}
        {_id && role === 1 && (
          <li className="nav-item ml-3">
            <Link
              className="nav-link"
              style={isActive(history, "/admin/dashboard")}
              to={dashBoardLink()}>
              Dashboard
            </Link>
          </li>
        )}

        {!_id && (
          <>
            {" "}
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/signin")}
                to="/signin">
                Signin
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/signup"
                style={isActive(history, "/signup")}>
                Signup
              </Link>
            </li>
          </>
        )}
        {_id && (
          <li className="nav-item">
            <span
              className="nav-link"
              onClick={() => {
                auth.signOut(() => {
                  history.push("/");
                });
              }}
              style={{ cursor: "pointer", color: "white" }}>
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
});
