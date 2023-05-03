import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">MovieMate</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <NavLink to="/home" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/movies"
                className="nav-link"
                activeClassName="active"
              >
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/theatre"
                className="nav-link"
                activeClassName="active"
              >
                Theatre
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/food-and-drink"
                className="nav-link"
                activeClassName="active"
              >
                Food & Drink
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/staff"
                className="nav-link"
                activeClassName="active"
              >
                Staff
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="navbar-user"
          style={{
            backgroundImage: "url('https://unsplash.com/photos/7YVZYZeITc8')",
          }}
        >
          <img
            alt=""
            src="https://via.placeholder.com/50x50.png?text=Admin"
            className="rounded-circle"
          />
          <style></style>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
