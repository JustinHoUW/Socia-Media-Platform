import { Link } from 'react-router-dom';
import '../NavBar.css';
import React, { useState } from 'react'; // Import useState from React


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{ fontSize: '24px' , fontWeight: 900}}>HitmeUp</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">

          <li className="nav-item">
          <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
          </li >
            <li className="nav-item">
              <a className="nav-link active" href="#" style = {{marginLeft: 300, marginTop: 9}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style = {{marginTop: 9}}>Notifications</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href= "#" style = {{marginTop: 9}} >Messages</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style = {{marginTop: 9}}>Me</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">View Profile</a>
                <a className="dropdown-item" href="#">Sign Out</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

