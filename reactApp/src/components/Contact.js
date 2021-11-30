import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TableFilter from "react-table-filter";

import "./Order/Order.css";
import "./Contact.css";

class Contact extends Component {
  state = {
    c_id: 0,
    Fname: "",
    Lname: "",
    Email: "",
    PhoneNumber: 0,
    Inquiry: "Please enter you inquiry here",
  };

  submit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `http://127.0.0.1:8000/api/add-inquiry`,
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.setState({
        c_id: 0,
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
        <div class="contact__us">
          <div>
            <h1>Contact Us</h1>
          </div>

          <div class="details">
            <h2>Address</h2>
            <p>3811 Sherwood Circle</p>
            <p>Kernersville</p>
            <p>North Carolina</p>
            <h2>Phone</h2>
            <p>+91 9123456789</p>
            <h2>Email</h2>
            <p>instaWash@email.com</p>
          </div>
        </div>

        <div className="orderForm">
          <div className="heading">
            <h1>New Inquiry</h1>
          </div>
          <form onSubmit={this.submit} className="inputs">
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

export default Contact;
