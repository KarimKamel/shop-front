import React, { useState } from "react";
import Layout from "../core/Layout";
import Form from "./Form";
import { signUp } from "../auth/index";
import Message from "./Message";

export default function SignUp() {
  const [fields, setFields] = useState({
    name: "",
    password: "",
    email: "",
    error: "",
    success: false,
  });

  const handleChange = event => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
      error: "",
      success: false,
    });
  };
  const handleSubmit = event => {
    event.preventDefault();

    const { name, email, password } = fields;
    const user = { name, email, password };
    signUp(user).then(res => {
      if (res.error) {
        return setFields({ ...fields, error: res.error });
      }
      return setFields({
        name: "",
        email: "",
        password: "",
        success: true,
        error: "",
      });
    });
  };

  return (
    <div>
      <Layout
        title="Signup"
        description="Signup to React e-commerce app"
        className="col-md-6 ml-3">
        <Form
          formType="signUp"
          handleChange={handleChange}
          fields={fields}
          handleSubmit={handleSubmit}
        />
        <Message success={fields.success} error={fields.error} />
      </Layout>
    </div>
  );
}
