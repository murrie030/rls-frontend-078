import React, { Component } from "react";
import { Link } from "react-router-dom";

import CreateVehicleButton from "./buttons/createVehicleButton";

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

  render() {
    const idStyle = {
      color: "orange",
    };
    return (
      <div className="container" id="content">
        <h1>Overview</h1>
        <p>
          Below there is an overview of the <strong>vehicles</strong>.
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
                <Link to={`/overview/vehicle-id=${vehicle.id}`}>
                  <td style={idStyle}>{vehicle.id}</td>
                </Link>
                <td>{vehicle.internalVehicleFacility}</td>
                <td>{vehicle.informationToBeDisplayed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Overview;
