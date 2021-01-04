import React, { useState } from "react";
import Layout from "../core/Layout";
import Form from "./Form";
import { signIn, authenticate } from "../auth/index";
import Message from "./Message";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth";
import { useAuth } from "../todo/context/ProvideAuth";

export default function SignIn() {
  const auth = useAuth();
  const [fields, setFields] = useState({
    name: "",
    password: "123456",
    email: "dave@mail.com",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const {
    auth: { user },
  } = auth;
  const { name, password, email, error, loading, redirectToReferrer } = fields;

  const handleChange = event => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
      error: "",
      loading: false,
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    setFields({ ...fields, loading: true });

    const user = { email, password };
    auth.signIn(user).then(res => {
      if (res.error) {
        return setFields({ ...fields, error: res.error });
      }
      return setFields({
        name: "",
        email: "",
        password: "",
        loading: false,
        redirectToReferrer: true,
        error: "",
      });
    });
  };

  const redirectUser = () => {
    if (fields.redirectToReferrer) {
      if (user && user.role === 1) return <Redirect to="/admin/dashboard" />;
      if (user && user.role === 0) return <Redirect to="/user/dashboard" />;
      console.log("no user found");
    }
  };
  return (
    <div>
      <Layout
        title="SignIn"
        description="SignIn to React e-commerce app"
        className="col-md-6 ml-3">
        <Form
          formType="signIn"
          handleChange={handleChange}
          fields={fields}
          handleSubmit={handleSubmit}
        />
        <Message success={redirectToReferrer} loading={loading} error={error} />
        {redirectUser()}
      </Layout>
    </div>
  );
}
