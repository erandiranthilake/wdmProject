import React, { Component, Redirect } from "react";
import axios from "axios";

import "./Order.css";

class DeleteOrder extends Component {
  state = {
    id: 0,
  };

  async componentDidMount() {
    const id = this.props.match.params.id;

    this.setState({
      id: id,
    });
  }

  deleteOrder = async (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;

    const res = await axios.delete(
      `http://127.0.0.1:8000/api/delete-order/${id}`,
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
        <label>Order ID:</label>
        <input
          onChange={this.handle}
          type="number"
          name="id"
          value={this.state.id}
        />
        <button
          type="submit"
          name="button"
          class="order"
          onClick={this.deleteOrder}
        >
          Delete Order?
        </button>
      </div>
    );
  }
}

export default DeleteOrder;
