import React, { Component } from "react";
import axios from "axios";
import emailjs from "emailjs-com";

import "./Register.css";

class ServiceRegistration extends Component {
  state = {
    EquipmentType: "",
    Availability: "Available",
  };

  submit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://127.0.0.1:8000/api/add-equipment",
      this.state
    );

    if (res.data.status === 200) {
      console.log(res.data.message);

      this.setState({
        EquipmentType: "",
        Availability: "Available",
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
          <h1>Equipment Details</h1>
        </div>
        <form onSubmit={this.submit} className="inputs">
          <label>Equipment Type</label>
          <input
            onChange={this.handle}
            type="text"
            name="EquipmentType"
            value={this.state.EquipmentType}
            placeholder="Equipment Type"
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
