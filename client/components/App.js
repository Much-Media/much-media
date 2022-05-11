import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function App(props) {
  return (
    <div id='app-container' className="container-fluid">
      <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
      <div id='content-containeer' className='.container'>
        <Outlet />
      </div>
    </div>


  )
}

export default App; 