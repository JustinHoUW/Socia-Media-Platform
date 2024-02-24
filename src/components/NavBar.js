import { Link } from 'react-router-dom';
 import React, { useState } from 'react'; // Import useState from React
import { Dropdown } from 'bootstrap';



const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">HitmeUp</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
          </ul>
          <ul className="navbar-nav me-auto"> {/* Close this ul tag */}
            <li className="nav-item">
              <a className="nav-link" href="#">Messages</a>
            </li>
            <div className="dropdown-menu">
              <ul>
                <DropdownItem/>
                <DropdownItem/>
                <DropdownItem/>
              </ul>
            </div>
          </ul> {/* Add this closing ul tag */}
          <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
          <ul className="navbar-nav me-auto">
  <li className="nav-item">
    <Link className="nav-link active" to="/login">Login</Link>
  </li>
</ul>
        </div>
      </div>
    </nav>
  );
};


function DropdownItem(props) {
  return (
    <li className='dropdownItem'>
      <a>{props.text}</a>
    </li>
  )
}
export default NavBar;


