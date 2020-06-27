import React, { Component } from "react";

class VehicleDetail extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data: [],
  //   };
  // }

  /* 
    When the data is fetched successfully, it will be stored
    in the local state with React's this.setState() method 
  */
  // componentDidMount() {
  //   fetch("http://localhost:5000/api/v1/vehicles/2")
  //     .then((respone) => respone.json())
  //     .then((data) => this.setState({ data: data.data }));
  // }

  render() {
    return (
      <div className="container" id="content">
        {/* {this.state.data.map((vehicle) => (
          <p key={vehicle.id}>test with {vehicle.id}</p>
        ))} */}
      </div>
    );
  }
}

export default VehicleDetail;
