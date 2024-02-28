import { BrowserRouter as Router, Route, Routes, Navigate, Outlet, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Home, Login, Profile, Register, ResetPassword, ProfileCard } from "./pages";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootswatch/dist/morph/bootstrap.min.css';

// Import Components
import NavBar from './components/NavBar';

function Layout() {
  const user = useSelector((state => state.user));
  const location = useLocation();
  //console.log(user);
  
  // Authenticate the user
  return user?.token ? (
    <Outlet />
  ) : (
    // Not authenticated, redirects to login page
    <Navigate to="/login" state={{ from: location }} replace />

  );
}
function App () {
  const { theme } = useSelector((state) => state.theme);

  return ( 
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:id?" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/ProfileCard" element={<ProfileCard />} />

        </Routes> 
      </div>
    </Router>
  );
};

export default App;