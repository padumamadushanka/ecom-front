import React from "react";
import Menu from "./Menu";
import "../styles.css";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children
}) => (
  <div className="default-body">
    <Menu />
    <div className="jumbotron">
      <h1 className="layout-title">{title}</h1>
      <p className="jumbo-description">{description}</p>
    </div>
    <div className={className}>{children}</div>
    <div className="card text-center footer">
      <div className="card-body">
        <h5 className="card-title">developed by</h5>
        <p className="card-text">paduma madushanka</p>
        <img src="../frozone-logo.png" className="logo-img"></img>
      </div>
      <div className="card-footer text-muted">
        &copy; 2020 all rights reserved
      </div>
    </div>
  </div>
);

export default Layout;
