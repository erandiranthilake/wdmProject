import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TableFilter from "react-table-filter";

import "./Order.css";

class Order extends Component {
  state = {
    e_id: localStorage.getItem("id"),
    c_id: 0,
    weight: 0,
    service: "Laundry/ Dry Cleaning/ Pressing",
    amount: 0,
    status: "Pending",
    type: "Delivery/ Pickup",
    paymentMethod: "Not Specified",
    paymentStatus: "Not Complete",
    miscellaneous: "No Comments",
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

  submit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `http://127.0.0.1:8000/api/add-order`,
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.setState({
        e_id: 0,
        c_id: 0,
        weight: 0,
        service: "",
        amount: 0,
        status: "Pending",
        type: "",
        paymentMethod: "Not Specified",
        paymentStatus: "Not Complete",
        miscellaneous: "No Comments",
      });
    }
  };

  handle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

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
          <td>
            <button className="order">
              <Link to={`/checkoutOrder/${item.id}`}>Checkout</Link>
            </button>
          </td>
          <td>
            <button className="order">
              <Link to={`/deleteOrder/${item.id}`}>Delete</Link>
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <div class="equipments">
          <div class="heading">
            <h1>Order Details</h1>
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
                  <th>Checkout</th>
                  <th>Delete</th>
                </TableFilter>
              </thead>
              <tbody>{dataHtml}</tbody>
            </table>
          </div>
        </div>

        <div className="orderForm">
          <div className="heading">
            <h1>New Order</h1>
          </div>
          <form onSubmit={this.submit} className="inputs">
            <label>Employee ID:</label>
            <input
              onChange={this.handle}
              type="number"
              name="e_id"
              value={this.state.e_id}
            />
            <label>Customer ID:</label>
            <input
              onChange={this.handle}
              type="number"
              name="c_id"
              value={this.state.c_id}
            />
            <label>Weight:</label>
            <input
              onChange={this.handle}
              type="number"
              name="weight"
              value={this.state.weight}
            />
            <label>Amount:</label>
            <input
              onChange={this.handle}
              type="number"
              name="amount"
              value={this.state.amount}
            />
            <label>Service:</label>
            <input
              onChange={this.handle}
              type="text"
              name="service"
              value={this.state.service}
            />
            <label>Deliver Type:</label>
            <input
              onChange={this.handle}
              type="text"
              name="type"
              value={this.state.type}
            />
            <label>Payment Method:</label>
            <input
              onChange={this.handle}
              type="text"
              name="paymentMethod"
              value={this.state.paymentMethod}
              placeholder="Not Specified"
            />
            <label>Comments:</label>
            <input
              onChange={this.handle}
              type="text"
              name="miscellaneous"
              value={this.state.miscellaneous}
              placeholder="Not Comments"
            />
            <button type="submit" className="order">
              Place Order
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Order;
