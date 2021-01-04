import React from "react";

export default function Form(props) {
  const handleChange = event => {
    console.log("running");
    props.handleChange(event);
  };
  const { name, email, password } = props.fields;

  return (
    <form>
      {props.formType === "signUp" && (
        <div className="form-group">
          <label className="text-muted">Name</label>
          <input
            type="name"
            name="name"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </div>
      )}

      <div className="form-group">
        <label className="text-muted">Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={props.handleSubmit}>
        Submit
      </button>
    </form>
  );
}
