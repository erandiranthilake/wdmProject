import React, { Component, Redirect } from "react";
import axios from "axios";

import "../Order/Order.css";

class UpdateService extends Component {
  state = {
    id: 0,
    ServiceName: "",
    Rate: 0,
  };

  async componentDidMount() {
    const id = this.props.match.params.id;

    const res = await axios.get(`http://127.0.0.1:8000/api/get-service/${id}`);
    console.log(res);

    if (res.data.status === 200) {
      this.setState({
        id: res.data.service.id,
        ServiceName: res.data.service.ServiceName,
        Rate: res.data.service.Rate,
      });
    }
    console.log(this.state);
  }

  updateService = async (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;

    const res = await axios.put(
      `http://127.0.0.1:8000/api/update-service/${id}`,
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.props.history.push("/serviceregistration");
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
          <h3>Update Service</h3>
          <br />
        </div>
        <form class="inputs" onSubmit={this.updateService}>
          <label>Service ID:</label>
          <input
            onChange={this.handle}
            type="number"
            name="id"
            value={this.state.id}
          />
          <label>Service Type:</label>
          <input
            onChange={this.handle}
            type="text"
            name="ServiceName"
            value={this.state.ServiceName}
          />
          <label>Rate:</label>
          <input
            onChange={this.handle}
            type="text"
            name="Rate"
            value={this.state.Rate}
          />

          <button type="submit" name="button" class="order">
            Update Service
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateService;
