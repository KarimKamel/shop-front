import { Link, withRouter } from "react-router-dom";
import React from "react";
import { signOut, isAuthenticated } from "../auth";

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: "#FF9900" };
  return { color: "white" };
};

export default withRouter(function Menu(props) {
  const history = props.history;
  const userType =
    isAuthenticated() && isAuthenticated().user.role === 1 ? "admin" : "user";
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
        {isAuthenticated() && userType === "user" && (
          <li className="nav-item ml-3">
            <Link
              className="nav-link"
              style={isActive(history, "/user/dashboard")}
              to={dashBoardLink()}>
              Dashboard
            </Link>
          </li>
        )}
        {isAuthenticated() && userType === "admin" && (
          <li className="nav-item ml-3">
            <Link
              className="nav-link"
              style={isActive(history, "/admin/dashboard")}
              to={dashBoardLink()}>
              Dashboard
            </Link>
          </li>
        )}

        {!isAuthenticated() && (
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
        {isAuthenticated() && (
          <li className="nav-item">
            <span
              className="nav-link"
              onClick={() => {
                signOut(() => {
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
