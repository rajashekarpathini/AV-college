import React from "react";
import {Outlet, Link } from "react-router-dom";
// import Home  from "../Home/Home";


const Layout = () => {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/Payment">Payment</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
    
  )
};

export default Layout;
