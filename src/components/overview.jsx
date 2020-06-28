import React, { Component } from "react";
import { Link } from "react-router-dom";

import CreateVehicleButton from "./buttons/createVehicleButton";
import UpdateButton from "./buttons/updateButton";

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  /* 
    When the data is fetched successfully, it will be stored
    in the local state with React's this.setState() method 
  */
  componentDidMount() {
    fetch("http://localhost:5000/api/v1/vehicles")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data.data }));
  }

  /* 
    This method ensures that whenever you wan't to delete a vehicle from the overview,
    you will get asked if you are sure if you wan't to delete that specific vehicle
    (It doesn't delete the vehicle though!)
  */
  deleteVehicleButton(id) {
    window.confirm(
      "Are you sure that you want to delete vehicle with id " + id + "?"
    );
  }

  render() {
    const idStyle = {
      color: "orange",
    };
    return (
      <div className="container" id="content">
        <h1>Overview</h1>
        <hr />
        <p>
          Below there is an overview of the <strong>vehicles</strong>. Click the
          ID to get information about a specific vehicle.
        </p>
        <CreateVehicleButton />

        <table className="table">
          <thead>
            <tr>
              <th className="title" scope="col">
                Vehicle ID
              </th>
              <th className="title" scope="col">
                Internal Vehicle Facility
              </th>
              <th className="title" scope="col">
                Information
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((vehicle) => (
              <tr key={vehicle.id}>
                <Link
                  to={{
                    pathname: `/overview/vehicle-id=${vehicle.id}`,
                    data: vehicle.id,
                  }}
                >
                  <td style={idStyle}>{vehicle.id}</td>
                </Link>
                <td>{vehicle.internalVehicleFacility}</td>
                <td>{vehicle.informationToBeDisplayed}</td>
                <td>
                  <UpdateButton />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => this.deleteVehicleButton(vehicle.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Overview;
