import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import './ManagerPortal.css';
import '../Delivery/Delivery.css';
import '../Order/Order.css';

const ManagerPortal = () => {

    const [data, setData] = useState();

    useEffect(async() => {
      const res = await axios.get("http://127.0.0.1:8000/api/orders");
      if(res) setData(res.data.orders);
    }, []);

  
  let dataHtml;
    if(data){
    let today = new Date();
    today = today.toDateString();
    const filterByExpiration = data.filter((items)  => {
        return new Date(items.updated_at).toDateString() === today;
  });
    dataHtml = filterByExpiration.map((item, index) => {
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

      <div class="equipments">
          <div class="heading">
            <h1>Daily Tasks:</h1>
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
      </React.Fragment>
    );
  }
  
  export default ManagerPortal;