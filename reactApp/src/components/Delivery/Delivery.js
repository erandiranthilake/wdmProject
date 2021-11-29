import React, { Component, useState } from "react";
import TableFilter from "react-table-filter";
import { Link } from "react-router-dom";

import "./Delivery.css";
import "./../Order/Order.css";

import axios from "axios";

class Delivery extends Component {
  state = {
    orders: [],
  };

  async componentDidMount() {
    const res = await axios.get("http://127.0.0.1:8000/api/orders");
    console.log(res);
    if (res.data.status === 200) {
      this.setState({
        orders: res.data.orders,
      });
    }
  }

  _filterUpdated(newData, filtersObject) {
    this.setState({
      data: newData, //populate the data from the API
    });
  }

  render() {
    const orders = this.state.orders;
    const dataHtml = orders.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.service}</td>
          <td>{item.type}</td>
          <td>{item.status}</td>
          <td>
            <button className="order">
              <Link to={`/updateOrder/${item.id}`}>Edit</Link>
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <div class="equipments">
          <div class="heading">
            <h1>Delivery / Pickup Details</h1>
          </div>
          <div class="table">
            <table>
              <thead>
                <TableFilter rows={orders} onFilterUpdate={this._filterUpdated}>
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
                  <th>Edit</th>
                </TableFilter>
              </thead>
              <tbody>{dataHtml}</tbody>
            </table>
          </div>
        </div>

        {/* <div class="option type">
          <Link to="/update-order">Edit Order</Link>
        </div> */}
      </div>
    );
  }
}

export default Delivery;
