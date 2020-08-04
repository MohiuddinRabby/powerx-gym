import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <Link
        to="/"
        className="navbar-brand"
        style={{ fontWeight: "bold", fontSize: "25px" }}
      >
        POWER <span style={{ color: "#ffcc00" }}>X</span>
      </Link>
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
        <ul className="navbar-nav ml-auto">
          <Link to="/" className=" nav-item nav-link">
            Home
          </Link>
          <Link to="/pricing" className=" nav-item nav-link">
            Pricing
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
