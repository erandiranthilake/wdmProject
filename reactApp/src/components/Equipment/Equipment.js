import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

import TableFilter from "react-table-filter";
import "./Equipment.css";
import { equipmentService } from "../../api/services";

class Equipment extends Component {
  state = {
    equipments: [],
  };

  async componentDidMount() {
    const res = await axios.get("http://127.0.0.1:8000/api/equipments");

    if (res.data.status === 200) {
      this.setState({
        equipments: res.data.equipments,
      });
    }
  }

  _filterUpdated(newData, filtersObject) {
    this.setState({
      data: newData, //populate the data from the API
    });
  }

  render() {
    const equipments = this.state.equipments;
    const dataHtml = equipments.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.EquipmentType}</td>
          <td>{item.Availability}</td>
        </tr>
      );
    });

    return (
      <div>
        <div class="equipments">
          <div class="heading">
            <h1>Equipments Available</h1>
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
                </TableFilter>
              </thead>
              <tbody>{dataHtml}</tbody>
            </table>
          </div>
        </div>
        <Helmet>
          <script src="./helper.js" type="text/javascript" />
        </Helmet>
      </div>
    );
  }
}

export default Equipment;
