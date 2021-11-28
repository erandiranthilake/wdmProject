import React, { Component } from "react";
import axios from "axios";

import "./Order.css";

class UpdateOrder extends Component {
  state = {
    id: 0,
    e_id: 0,
    c_id: 0,
    weight: 0,
    service: "",
    amount: 0,
    status: "",
    type: "",
    miscellaneous: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;

    const res = await axios.get(`http://127.0.0.1:8000/api/edit-order/${id}`);
    console.log(res);

    if (res.data.status === 200) {
      this.setState({
        id: res.data.order.id,
        e_id: res.data.order.e_id,
        c_id: res.data.order.c_id,
        weight: res.data.order.weight,
        service: res.data.order.service,
        amount: res.data.order.amount,
        status: res.data.order.status,
        type: res.data.order.type,
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
      this.setState({
        id: 0,
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
          <h3>Update Order</h3>
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
          <label>Status:</label>
          <input
            onChange={this.handle}
            type="text"
            name="status"
            value={this.state.status}
          />
          <label>Comments:</label>
          <input
            onChange={this.handle}
            type="text"
            name="miscellaneous"
            value={this.state.miscellaneous}
          />
          <button type="submit" name="button" class="order">
            Update Order
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateOrder;
