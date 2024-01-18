import React from "react";
import { NavLink } from "react-router-dom";


 const Navbar = () =>{
    return(
      <nav className="navbar navbar-expand-lg  py-1 ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"><img src="img/logo.jpg"  width={120} alt="" /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/service">Service</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    );
 };
 export default Navbar;


