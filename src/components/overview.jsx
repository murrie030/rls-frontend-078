import React, { Component } from "react";

import "./buttons/createButton";
import CreateButton from "./buttons/createButton";

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  /* 
    When the data is fetched successfully, it will be storde
    in the local state with React's this.setState() method 
  */
  componentDidMount() {
    fetch("http://localhost:5000/api/v1/vehicles")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data.data }));
  }

  render() {
    return (
      <div className="container" id="content">
        <h1>Overview</h1>
        <p>
          Below there is an overview of the <strong>vehicles</strong>.
        </p>
        <CreateButton />

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
                <th scope="row">{vehicle.id}</th>
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
