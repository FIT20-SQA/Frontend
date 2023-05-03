import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";
import { useState } from "react";
import AppLogo from '../../images/logo.png'
const Navbar = () => {
  const [ pathname, setPathName ] = useState(window.location.pathname);
  const location = useLocation()

  useEffect(() => {
    setPathName(location.pathname);
  }, [location])

  const checkIfHighlight = (path) => {
    if (path === pathname) {
      return true
    }
    return false
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="app-info" to='/'>
          <img className='app-logo' src={AppLogo} alt="" />
          <span className="app-name">MovieMate</span>

        </Link>
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
              <Link to="/" 
                className={checkIfHighlight('/') ? 'nav-link active' : 'nav-link'}
                >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/movies"
                className={checkIfHighlight('/movies') ? 'nav-link active' : 'nav-link'}
              >
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/theater-rooms"
                className={checkIfHighlight('/theater-rooms') ? 'nav-link active' : 'nav-link'}
              >
                Theaters
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/foods-and-drinks"
                className={checkIfHighlight('/foods-and-drinks') ? 'nav-link active' : 'nav-link'}
              >
                Foods & Drinks
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/staffs"
                className={checkIfHighlight('/staffs') ? 'nav-link active' : 'nav-link'}
                >
                Staffs
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="navbar-user"
         
        >
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
