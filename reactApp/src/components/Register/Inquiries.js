import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TableFilter from "react-table-filter";

import "../Order/Order.css";

class Inquiries extends Component {
  state = {
    c_id: localStorage.getItem("id"),
    Fname: "",
    Lname: "",
    Email: "",
    PhoneNumber: 0,
    Inquiry: "Please enter you inquiry here",
  };

  async componentDidMount() {
    const id = localStorage.getItem("id");
    const res = await axios.get(
      `http://127.0.0.1:8000/api/get-serviceuser/${id}`
    );
    console.log(res);
    if (res.data.status === 200) {
      this.setState({
        c_id: res.data.serviceUser.id,
        Fname: res.data.serviceUser.Fname,
        Lname: res.data.serviceUser.Lname,
        Email: res.data.serviceUser.Email,
        PhoneNumber: res.data.serviceUser.PhoneNumber,
      });
    }
  }

  submit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `http://127.0.0.1:8000/api/add-inquiry`,
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.setState({
        c_id: localStorage.getItem("id"),
        Fname: "",
        Lname: "",
        Email: "",
        PhoneNumber: 0,
        Inquiry: "Please enter you inquiry here",
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
      <div>
        <div className="orderForm">
          <div className="heading">
            <h1>New Inquiry</h1>
          </div>
          <form onSubmit={this.submit} className="inputs">
            <label>Customer ID:</label>
            <input
              onChange={this.handle}
              type="number"
              name="c_id"
              value={this.state.c_id}
            />
            <label>First Name</label>
            <input
              onChange={this.handle}
              type="text"
              name="Fname"
              value={this.state.Fname}
              placeholder="First Name"
            />
            <label>Last Name</label>
            <input
              onChange={this.handle}
              type="text"
              name="Lname"
              value={this.state.Lname}
              placeholder="Last Name"
            />
            <label>Email</label>
            <input
              onChange={this.handle}
              type="text"
              name="Email"
              value={this.state.Email}
              placeholder="Email"
            />
            <label>Phone Number</label>
            <input
              onChange={this.handle}
              type="number"
              name="PhoneNumber"
              value={this.state.PhoneNumber}
              placeholder="Phone Number"
            />
            <label>Inquiry:</label>
            <input
              onChange={this.handle}
              type="text"
              name="Inquiry"
              value={this.state.Inquiry}
              placeholder="Please enter you inquiry here"
            />
            <button type="submit" className="order">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Inquiries;
