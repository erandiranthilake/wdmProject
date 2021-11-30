import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./ManagerPortal.css";

const CustomerPortal = () => {
  const [data, setData] = useState();

  useEffect(async () => {
    const id = localStorage.getItem("id");
    const res = await axios.get(
      `http://127.0.0.1:8000/api/orders/customer/${id}`
    );
    if (res) setData(res.data.customerOrders);
  }, []);

  let dataHtml;
  if (data) {
    dataHtml = data.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.service}</td>
          <td>{item.type}</td>
          <td>{item.status}</td>
        </tr>
      );
    });
  }

  return (
    <React.Fragment>
      <div class="manager_portal">
        <h1>Welcome to the Customer Portal</h1>

        <div class="equipments">
          <div class="heading">
            <h1>My Orders:</h1>
          </div>
          <div class="table">
            <table>
              <thead>
                <th key="id">Order Id</th>
                <th key="service" filterkey="service">
                  Service
                </th>
                <th key="type" filterkey="service">
                  Delivery Type
                </th>
                <th key="status" filterkey="status">
                  Status
                </th>
              </thead>
              <tbody>{dataHtml}</tbody>
            </table>
          </div>
        </div>

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
