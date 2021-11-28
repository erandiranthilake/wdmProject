import React, { Component } from "react";
import axios from "axios";
import emailjs from "emailjs-com";

import "./Register.css";

class ServiceRegistration extends Component {
  state = {
    ServiceName: "",
    Rate: 0,
  };

  submit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://127.0.0.1:8000/api/add-service",
      this.state
    );

    if (res.data.status === 200) {
      console.log(res.data.message);

      this.setState({
        ServiceName: "",
        Rate: 0,
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
          <h1>Service Details</h1>
        </div>
        <form onSubmit={this.submit} className="inputs">
          <label>Service Name</label>
          <input
            onChange={this.handle}
            type="text"
            name="ServiceName"
            value={this.state.ServiceName}
            placeholder="Service Name"
          />
          <label>Rate</label>
          <input
            onChange={this.handle}
            type="number"
            name="Rate"
            value={this.state.Rate}
            placeholder="Rate"
          />

          <button type="submit" className="order">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default ServiceRegistration;
