import React from "react";
import { Link } from "react-router-dom";
import ROLES from "../roles";

import "./Navbar.css";
import UnlockAccess from "./UnlockAccess";

const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <div className="logo">
          <a href="emp-index.html">
            <h1>InstaWash</h1>
          </a>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <UnlockAccess request={[ROLES.ROLE_USER]}>
              <li>
                <Link to="/EmployerPortal">Employer Portal</Link>
              </li>
            </UnlockAccess>
            <UnlockAccess request={[ROLES.ROLE_MANAGER]}>
              <li>
                <Link to="/ManagerPortal">Manager Portal</Link>
              </li>
            </UnlockAccess>
            <UnlockAccess request={[ROLES.ROLE_SUPER_ADMIN]}>
              <li>
                <Link to="/SuperadminPortal">Super-Admin Portal</Link>
              </li>
            </UnlockAccess>
            <UnlockAccess request={[ROLES.ROLE_CUSTOMER]}>
              <li>
                <Link to="/CustomerPortal">Customer Portal</Link>
              </li>
            </UnlockAccess>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Chatbot">Chatbot</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <UnlockAccess request={[]}>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </UnlockAccess>
            <UnlockAccess
              request={[
                ROLES.ROLE_MANAGER,
                ROLES.ROLE_USER,
                ROLES.ROLE_CUSTOMER,
                ROLES.ROLE_SUPER_ADMIN,
              ]}
            >
              <li>
                <Link to="/Logout">Logout</Link>
              </li>
            </UnlockAccess>
            <li>
              <a target="_blank" href="http://sxa8728.uta.cloud/blog2/">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
