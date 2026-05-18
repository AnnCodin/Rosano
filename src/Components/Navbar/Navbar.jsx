import React from "react";
import "./Navbar.css";
import { Link, Links, NavLink } from "react-router-dom";
import site_logo from "../../assets/rosano-site-logo.png";

const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="site-logo">
        <Link to="/">
          <img src={site_logo} alt="" />
        </Link>
      </div>

      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/services">
          <li>Services</li>
        </NavLink>
        <NavLink to="/applynow">
          <li>Apply Now</li>
        </NavLink>
        <NavLink to="/blog">
          <li>Blog</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
      <div className="nav-btns">
        <button className="btn-login">
          Login <i class="ri-arrow-right-fill"></i>
        </button>
        <button className="btn-nav-primary">
          Open An Account <i class="ri-arrow-right-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
