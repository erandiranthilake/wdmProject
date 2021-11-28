import React from "react";
import { Link } from "react-router-dom";

import "./ManagerPortal.css";

const CustomerPortal = () => {
  return (
    <React.Fragment>
      <div class="manager_portal">
        <h1>Welcome to the Customer Portal</h1>

        <div class="links">
          <div class="link">
            <Link to="/Inquiries">Inquiries</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomerPortal;
