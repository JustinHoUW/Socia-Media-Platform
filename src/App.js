import React, { useState } from 'react';
 
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootswatch/dist/morph/bootstrap.min.css';

// Import Components
import NavBar from './components/NavBar';


const App = () => {
  return (
    <Router>
      <div>
        <NavBar /> {/* Render NavBar component outside of Routes */}
        <Routes>
          {/* Define your routes here */}
        </Routes>
      </div>
    </Router>
  );
};
export default App;
