import React, { Component, Redirect } from "react";
import axios from "axios";

import "./Order.css";

class Checkout extends Component {
  state = {
    id: 0,
    e_id: 0,
    c_id: 0,
    weight: 0,
    service: "Laundry/Dry Cleaning/Pressing",
    amount: 0,
    status: "Pending",
    type: "",
    paymentMethod: "Not Specified",
    paymentStatus: "Not Complete",
    miscellaneous: "No Comments",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;

    const res = await axios.get(`http://127.0.0.1:8000/api/get-order/${id}`);
    console.log(res);

    if (res.data.status === 200) {
      this.setState({
        id: res.data.order.id,
        e_id: res.data.order.e_id,
        c_id: res.data.order.c_id,
        weight: res.data.order.weight,
        service: res.data.order.service,
        amount: res.data.order.amount,
        status: "Complete",
        type: res.data.order.type,
        paymentMethod: res.data.order.paymentMethod,
        paymentStatus: "Complete",
        miscellaneous: res.data.order.miscellaneous,
      });
    }
  }

  updateOrder = async (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;

    const res = await axios.put(
      `http://127.0.0.1:8000/api/update-order/${id}`,
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.props.history.push("/order");
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
          <h3>Checkout Order</h3>
          <br />
        </div>
        <form class="inputs" onSubmit={this.updateOrder}>
          <label>Order ID:</label>
          <input
            onChange={this.handle}
            type="number"
            name="id"
            value={this.state.id}
          />
          <label>Employee ID:</label>
          <input
            onChange={this.handle}
            type="number"
            name="e_id"
            value={this.state.e_id}
          />
          <label>Service:</label>
          <input
            onChange={this.handle}
            type="text"
            name="service"
            value={this.state.service}
          />
          <label>Amount:</label>
          <input
            onChange={this.handle}
            type="text"
            name="amount"
            value={this.state.amount}
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
          <button type="submit" name="button" class="order">
            Update Order
          </button>
        </form>
      </div>
    );
  }
}

export default Checkout;
