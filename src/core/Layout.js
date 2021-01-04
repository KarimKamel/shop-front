import React from "react";
import Menu from "./Menu";

export default function Layout({
  title = "default title",
  description = "default description",
  className,
  children,
}) {
  return (
    <div>
      <Menu />
      <div className="jumbotron">
        <h2>{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
}
