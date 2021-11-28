import React from "react";
import { Link } from "react-router-dom";

import "./Order.css";

const Orders = () => {
  return (
    <React.Fragment>
      <div className="options">
        <div className="heading">
          <p>Who are you?</p>
        </div>
        <div className="types">
          <div className="type">
            <Link to="/register">New customer</Link>
          </div>
          <div className="type">
            <Link to="/order">Returning Customer</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Orders;
