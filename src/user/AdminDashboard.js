import React from "react";
import Layout from "../core/Layout";
import { useAuth } from "../todo/context/ProvideAuth";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const auth = useAuth();
  const {
    auth: {
      user: { _id, email, name, role },
    },
  } = auth;

  const adminLinks = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Admin Links</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/create/category">create category</Link>
          </li>
          <li className="list-group-item">
            <Link to="/create/product">create product</Link>
          </li>
        </ul>
      </div>
    );
  };
  const adminInfo = () => {
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

  return (
    <Layout
      title="Dashboard"
      description={`G'day ${name}`}
      className="container-fluid">
      <div className="row">
        <div className="col-3 mx-2">{adminLinks()}</div>
        <div className="col-5 ">{adminInfo()}</div>
      </div>
    </Layout>
  );
}
