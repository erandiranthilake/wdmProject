import React, { Component } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import TableFilter from "react-table-filter";
import { Helmet } from "react-helmet";

import "../Register/Register.css";

class ServiceRegistration extends Component {
  state = {
    ServiceName: "",
    Rate: 0,
    services: [],
  };

  async componentDidMount() {
    const res = await axios.get("http://127.0.0.1:8000/api/services");

    if (res.data.status === 200) {
      console.log(res.data.status);
      this.setState({
        services: res.data.services,
      });
    }
  }

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
      window.location.reload();
    }
  };

  handle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const services = this.state.services;
    const dataHtml = services.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.ServiceName}</td>
          <td>{item.Rate}</td>
          <td>
            <button className="order">
              <Link to={`/updateService/${item.id}`}>Edit</Link>
            </button>
          </td>
          <td>
            <button className="order">
              <Link to={`/deleteService/${item.id}`}>Delete</Link>
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <div class="equipments">
          <div class="heading">
            <h1>Services Details</h1>
          </div>
          <div class="table">
            <table>
              <thead>
                <TableFilter
                  rows={services}
                  onFilterUpdate={this._filterUpdated}
                >
                  <th key="id">Service Id</th>
                  <th key="ServiceName" filterkey="ServiceName">
                    Service Type
                  </th>
                  <th key="Rate" filterkey="Rate">
                    Rate
                  </th>
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
            <h1>Register Service</h1>
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
      </div>
    );
  }
}

export default ServiceRegistration;
