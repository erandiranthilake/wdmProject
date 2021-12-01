import React, { Component, Redirect } from "react";
import axios from "axios";

import "../Order/Order.css";

class UpdateOrder extends Component {
  state = {
    Fname: "",
    Minit: "",
    Lname: "",
    Email: "",
    Password: "customer1234",
    PhoneNumber: 0,
    Street1: "",
    Street2: "",
    City: "",
    State: "",
    ZipCode: 0,
    Ssn: 0,
    Role: "ROLE_CUSTOMER",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;

    const res = await axios.get(
      `http://127.0.0.1:8000/api/get-serviceuser/${id}`
    );
    console.log(res);

    if (res.data.status === 200) {
      this.setState({
        Fname: res.data.serviceUser.Fname,
        Minit: res.data.serviceUser.Minit,
        Lname: res.data.serviceUser.Lname,
        Email: res.data.serviceUser.Email,
        Password: res.data.serviceUser.Password,
        PhoneNumber: res.data.serviceUser.PhoneNumber,
        Street1: res.data.serviceUser.Street1,
        Street2: res.data.serviceUser.Street2,
        City: res.data.serviceUser.City,
        State: res.data.serviceUser.State,
        ZipCode: res.data.serviceUser.ZipCode,
        Ssn: res.data.serviceUser.Ssn,
        Role: res.data.serviceUser.Role,
      });
    }
  }

  updateServiceUser = async (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;

    const res = await axios.put(
      `http://127.0.0.1:8000/api/update-serviceuser/${id}`,
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.props.history.push("/register");
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
          <h3>Update Customer Details</h3>
          <br />
        </div>
        <form onSubmit={this.updateServiceUser} className="inputs">
          <label>First Name</label>
          <input
            onChange={this.handle}
            type="text"
            name="Fname"
            value={this.state.Fname}
            placeholder="First Name"
          />
          <label>Middle Initial</label>
          <input
            onChange={this.handle}
            type="text"
            name="Minit"
            value={this.state.Minit}
            placeholder="Middle Initial"
          />
          <label>Last Name</label>
          <input
            onChange={this.handle}
            type="text"
            name="Lname"
            value={this.state.Lname}
            placeholder="Last Name"
          />
          <label>Street 1</label>
          <input
            onChange={this.handle}
            type="text"
            name="Street1"
            value={this.state.Street1}
            placeholder="Street 1"
          />
          <label>Street 2</label>
          <input
            onChange={this.handle}
            type="text"
            name="Street2"
            value={this.state.Street2}
            placeholder="Street 2"
          />
          <label>City</label>
          <input
            onChange={this.handle}
            type="text"
            name="City"
            value={this.state.City}
            placeholder="City"
          />
          <label>State</label>
          <input
            onChange={this.handle}
            type="text"
            name="State"
            value={this.state.State}
            placeholder="State"
          />
          <label>Zip Code</label>
          <input
            onChange={this.handle}
            type="number"
            name="ZipCode"
            value={this.state.ZipCode}
            placeholder="Zip Code"
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
          <button type="submit" className="order">
            Update Customer
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateOrder;
