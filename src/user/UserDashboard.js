import React from "react";
import Layout from "../core/Layout";
import { useAuth } from "../todo/context/ProvideAuth";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  const auth = useAuth();
  const {
    auth: {
      user: { _id, email, name, role },
    },
  } = auth;

  const userLinks = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Links</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/cart">cart</Link>
          </li>
          <li className="list-group-item">
            <Link to="/profile/update">cart</Link>
          </li>
        </ul>
      </div>
    );
  };
  const userInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">
            {role === 0 ? "normal user" : "admin"}
          </li>
        </ul>
      </div>
    );
  };

  const purchaseHistory = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Purchase History</h3>
        <ul className="list-group">
          <li className="list-group-item">history</li>
        </ul>
      </div>
    );
  };
  //   console.log("user " + user);

  //   console.log("token " + token);
  return (
    <Layout
      title="Dashboard"
      description={`G'day ${name}`}
      className="container-fluid">
      <div className="row">
        <div className="col-3 mx-2">{userLinks()}</div>
        <div className="col-5 ">
          {userInfo()}
          {purchaseHistory()}
        </div>
      </div>
    </Layout>
  );
}
