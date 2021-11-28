import React, { Component } from "react";
import axios from "axios";

import "./Order.css";

class Order extends Component {
  state = {
    e_id: 0,
    c_id: 0,
    weight: 0,
    service: "",
    amount: 0,
    status: "Pending",
    type: "",
    miscellaneous: "",
  };

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
        status: "",
        type: "",
        miscellaneous: "Comments",
      });
    }
  };

  handle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="orderForm">
        <div className="heading">
          <h1>Enter Order Details</h1>
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
          <label>Comments:</label>
          <input
            onChange={this.handle}
            type="text"
            name="comments"
            value={this.state.miscellaneous}
            placeholder="Comments"
          />
          <button type="submit" className="order">
            Place Order
          </button>
        </form>
      </div>
    );
  }
}

export default Order;
