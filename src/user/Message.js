import React from "react";
import { Link } from "react-router-dom";

export default function Message(props) {
  const getClass = () => {
    if (props.error) return "alert alert-danger my-3";
    if (props.success || props.loading) return "alert alert-info my-3";
  };

  return (
    <div
      className={getClass()}
      style={{
        display: props.error || props.success || props.loading ? "" : "none",
      }}>
      {props.error ||
        (props.success && (
          <p>
            New account has been created please{" "}
            <Link to="/signin"> sign in</Link>
          </p>
        )) ||
        (props.loading && <p>Loading</p>)}
    </div>
  );
}
