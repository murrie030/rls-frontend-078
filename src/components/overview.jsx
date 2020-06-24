import React, { Component } from "react";

import "./buttons/createButton";
import CreateButton from "./buttons/createButton";

class Overview extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }
  render() {
    return (
      <div className="container" id="content">
        <h1>Overview</h1>
        <CreateButton />
        <table className="table">
          <thead>
            <tr>
              <th className="title" scope="col">
                Operational Train Number
              </th>
              <th className="title" scope="col">
                Train Type
              </th>
              <th className="title" scope="col">
                Company
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Passenger Train</td>
              <td>NS</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Overview;
