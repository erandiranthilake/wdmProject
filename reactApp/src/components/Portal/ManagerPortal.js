import React from "react";
import { Link } from "react-router-dom";

import './ManagerPortal.css';

const ManagerPortal = () => {
    return (
      <React.Fragment>
      <div class="manager_portal">
        <h1>Welcome to the Manager Portal</h1>
  
        <div class="links">
          <div class="link">
          <Link to="/EmpRegistration">Register Employee</Link>
          </div>
          <div class="link">
          <Link to="/ServiceRegistration">Register Service</Link>
          </div>
          <div class="link">
          <Link to="/EquipRegistration">Register Equipment</Link>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
  
  export default ManagerPortal;