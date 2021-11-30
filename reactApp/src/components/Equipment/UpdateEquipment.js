import React, { Component, Redirect } from "react";
import axios from "axios";

import "../Order/Order.css";

class UpdateEquipment extends Component {
  state = {
    id: 0,
    EquipmentType: "",
    Availability: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;

    const res = await axios.get(
      `http://127.0.0.1:8000/api/get-equipment/${id}`
    );
    console.log(res);

    if (res.data.status === 200) {
      this.setState({
        id: res.data.equipment.id,
        EquipmentType: res.data.equipment.EquipmentType,
        Availability: res.data.equipment.Availability,
      });
    }
    console.log(this.state);
  }

  updateOrder = async (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;

    const res = await axios.put(
      `http://127.0.0.1:8000/api/update-equipment/${id}`,
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.props.history.push("/equipregistration");
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
          <h3>Update Equipment</h3>
          <br />
        </div>
        <form class="inputs" onSubmit={this.updateOrder}>
          <label>Equipment ID:</label>
          <input
            onChange={this.handle}
            type="number"
            name="id"
            value={this.state.id}
          />
          <label>Equipment Type:</label>
          <input
            onChange={this.handle}
            type="text"
            name="EquipmentType"
            value={this.state.EquipmentType}
          />
          <label>Availability:</label>
          <input
            onChange={this.handle}
            type="text"
            name="Availability"
            value={this.state.Availability}
          />

          <button type="submit" name="button" class="order">
            Update Equipment
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateEquipment;
