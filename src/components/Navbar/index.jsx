import React from "react";
import { Link } from "react-router-dom";
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
              <Link to="/home" className="nav-link" activeClassName="active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movies" className="nav-link" activeClassName="active">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/theatre" className="nav-link" activeClassName="active">
                Theatre
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/food-and-drink"
                className="nav-link"
                activeClassName="active"
              >
                Food & Drink
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/staff" className="nav-link" activeClassName="active">
                Staff
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-user">
          <img
            alt=""
            src="https://plus.unsplash.com/premium_photo-1678935941839-e66f46191c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
            className="rounded-circle"
          />
          <style></style>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
