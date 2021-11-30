import React, { Component } from "react";
import axios from "axios";
import TableFilter from "react-table-filter";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "../Register/Register.css";

class EquipRegistration extends Component {
  state = {
    EquipmentType: "",
    Availability: "Available",
    equipments: [],
  };

  async componentDidMount() {
    const res = await axios.get("http://127.0.0.1:8000/api/equipments");

    if (res.data.status === 200) {
      console.log(res.data.status);
      this.setState({
        equipments: res.data.equipments,
      });
    }
  }

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
      window.location.reload();
    }
  };

  handle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const equipments = this.state.equipments;
    const dataHtml = equipments.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.EquipmentType}</td>
          <td>{item.Availability}</td>
          <td>
            <button className="order">
              <Link to={`/updateEquipment/${item.id}`}>Edit</Link>
            </button>
          </td>
          <td>
            <button className="order">
              <Link to={`/deleteEquipment/${item.id}`}>Delete</Link>
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <div class="equipments">
          <div class="heading">
            <h1>Equipments Details</h1>
          </div>
          <div class="table">
            <table>
              <thead>
                <TableFilter
                  rows={equipments}
                  onFilterUpdate={this._filterUpdated}
                >
                  <th key="id">Equipment Id</th>
                  <th key="EquipmentType" filterkey="EquipmentType">
                    Type
                  </th>
                  <th key="Availability" filterkey="Availability">
                    Availability
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
            <h1>Register Equipment</h1>
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
      </div>
    );
  }
}

export default EquipRegistration;
