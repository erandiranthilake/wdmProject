import React, { Component } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import TableFilter from "react-table-filter";
import { Helmet } from "react-helmet";

import "./Register.css";

class Register extends Component {
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
    customers: [],
  };

  async componentDidMount() {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/serviceuser-role/ROLE_CUSTOMER`
    );

    if (res.data.status === 200) {
      console.log(res.data.status);
      this.setState({
        customers: res.data.serviceUsers,
      });
    }
  }

  submit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://127.0.0.1:8000/api/add-serviceuser",
      this.state
    );

    if (res.data.status === 200) {
      console.log(res.data.message);

      emailjs
        .send(
          "service_2cp07rx",
          "template_4b0kqyx",
          {
            name: this.state.Fname,
            email: this.state.Email,
          },
          "user_5uXv3UBimyPhOCAE2kSj8"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );

      this.setState({
        Fname: "",
        Minit: "",
        Lname: "",
        Email: "",
        Password: "",
        PhoneNumber: 0,
        Street1: "",
        Street2: "",
        City: "",
        State: "",
        ZipCode: 0,
        Ssn: 0,
        Role: "ROLE_CUSTOMER",
      });
      window.location.reload();
    }
  };

  handle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const customers = this.state.customers;
    const dataHtml = customers.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.Fname}</td>
          <td>{item.Lname}</td>
          <td>{item.Email}</td>
          <td>{item.PhoneNumber}</td>
          <td>{item.City}</td>
          <td>
            <button className="order">
              <Link to={`/updateServiceUser/${item.id}`}>Edit</Link>
            </button>
          </td>
          <td>
            <button className="order">
              <Link to={`/deleteServiceUser/${item.id}`}>Delete</Link>
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <div class="equipments">
          <div class="heading">
            <h1>Customer Details</h1>
          </div>
          <div class="table">
            <table>
              <thead>
                <TableFilter
                  rows={customers}
                  onFilterUpdate={this._filterUpdated}
                >
                  <th key="id">Customer Id</th>
                  <th key="Fname">First Name</th>
                  <th key="Lname">Last Name</th>
                  <th key="Lname">Email</th>
                  <th key="Lname">Phone Number</th>
                  <th key="Lname">City</th>

                  <th>Edit</th>
                  <th>Delete</th>
                </TableFilter>
              </thead>
              <tbody>{dataHtml}</tbody>
            </table>
          </div>
        </div>
        <Helmet>
          <script src="./helper.js" type="text/javascript" />
        </Helmet>

        <div className="orderForm">
          <div className="heading">
            <h1>New Customer</h1>
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
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
