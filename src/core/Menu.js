import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = ({ history }) => (
  <div>
    <nav className="navbar navbar-expand-lg menu-div">
      <a className="navbar-brand" href="#">
        <Link className="navbar-brand" style={isActive(history, "/")} to="/">
          <img
            src="../frozone-logo.png"
            className="logo-img"
            alt="company-logo"
          ></img>
        </Link>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <Link
              className="nav-link"
              style={isActive(history, "/shop")}
              to="/shop"
            >
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/cart")}
              to="/cart"
            >
              Cart{" "}
              <sup>
                <small className="cart-badge">{itemTotal()}</small>
              </sup>
            </Link>
          </li>
          {isAuthenticated() && isAuthenticated().user.role === 0 && (
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/user/dashboard")}
                to="/user/dashboard"
              >
                User Dashboard
              </Link>
            </li>
          )}
          {isAuthenticated() && isAuthenticated().user.role === 1 && (
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(history, "/admin/dashboard")}
                to="/admin/dashboard"
              >
                Admin Dashboard
              </Link>
            </li>
          )}
          {!isAuthenticated() && (
            <Fragment>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={isActive(history, "/signin")}
                  to="/signin"
                >
                  Signin
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={isActive(history, "/signup")}
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && (
            <li className="nav-item">
              <span
                className="nav-link"
                style={{ cursor: "pointer", color: "#ffffff" }}
                onClick={() =>
                  signout(() => {
                    history.push("/");
                  })
                }
              >
                Signout
              </span>
            </li>
          )}
        </ul>
      </div>
    </nav>
  </div>
);

export default withRouter(Menu);
