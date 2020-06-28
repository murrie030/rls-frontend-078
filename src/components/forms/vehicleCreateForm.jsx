import React, { Component } from "react";

import CreateVehicleButton from "../buttons/createVehicleButton";

class VehicleCreateForm extends Component {
  constructor() {
    super();

    // State property
    this.state = {
      items: [], // Empty array
      isLoaded: false,
    };
  }

  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    let initialItems = [];
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request for Vehicle" }),
    };

    /*
      1. Call the API 
      2. Map over the results
    */
    fetch("http://localhost:5000/api/v1/vehicles", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        initialItems = data.results.map((item) => {
          return item;
        });
        console.log(initialItems);
        this.setState({
          items: initialItems,
          isLoaded: true,
        });
      });
  }

  render() {
    const subtitle = {
      marginTop: "1.5rem",
    };

    const { isLoaded } = this.state;

    // Access the items using props and assign them to a local variable
    let items = this.props.state.items;
    // Map over all the items, createing <option> tags that display each of the items names
    let optionItems = items.map((item) => (
      <option key={items.id}>{items.id}</option>
    ));

    if (!isLoaded) {
      return (
        <div className="container" id="content">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="container" id="content">
          <div className="title">
            <h1>Create a New Vehicle</h1>
            <hr />
            <p>Please fill in the fields that are shown in this form.</p>
          </div>

          <div className="information-title" style={subtitle}>
            <h4>Information</h4>
            <hr />
          </div>

          {/* Form */}
          <form id="vehicle-form" state={this.state}>
            {/* Row 1 - Traction Type & Powered Locomotive or Trainset*/}
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="traction-type">
                  <b>1)</b> Traction Type
                </label>
                <select className="form-control" id="traction-type">
                  {/* <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option> */}
                  {optionItems}
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="powered-locomotive-or-trainset">
                  <b>2)</b> Powered Locomotive or Trainset
                </label>
                <select
                  className="form-control"
                  id="powered-locomotive-or-trainse"
                >
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
              </div>
            </div>
            {/* End of Row 1 */}

            {/* Row 2 - Trainset Orientation & Keeper Shortname */}
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="trainset-orientation">
                  <b>3)</b> Trainset Orientation
                </label>
                <select className="form-control" id="trainset-orientation">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="9">9</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="keeper-short-name">
                  <b>4)</b> Keeper Shortname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="keeper-short-name"
                  name="keeper-short-name"
                ></input>
              </div>
            </div>
            {/* End of Row 2 */}

            {/* Row 3 - Internal Vehicle Facility */}
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="internal-vehicle-facility">
                  <b>5)</b> Internal Vehicle Facility
                </label>
                <select className="form-control" id="internal-vehicle-facility">
                  <option value="01 PRM (generic): Equipements for PRM">
                    01 PRM (generic): Equipements for PRM
                  </option>
                  <option value="02 PRM: number of equipments">
                    02 PRM: number of equipments
                  </option>
                  <option value="03 PRM: fit for wheelchair">
                    03 PRM: fit for wheelchair
                  </option>
                  <option value="04 PRM: adapted toilets">
                    04 PRM: adapted toilets
                  </option>
                  <option value="10 boxes for bicycles">
                    10 boxes for bicycles
                  </option>
                  <option value="11 non-smoking vehicle">
                    11 non-smoking vehicle
                  </option>
                  <option value="12 sound system available">
                    12 sound system available
                  </option>
                  <option value="13 box for conductor">
                    13 box for conductor
                  </option>
                  <option value="14 smoking compartment">
                    14 smoking compartment
                  </option>
                  <option value="15 dining car">15 dining car</option>
                  <option value="16 number of business class seats">
                    16 number of business class seats
                  </option>
                  <option value="17 number if first class seats">
                    17 number if first class seats
                  </option>
                  <option value="18 number of second class seats">
                    18 number of second class seats
                  </option>
                  <option value="19 number of seats with reclining position">
                    19 number of seats with reclining position
                  </option>
                  <option value="20 number of sleeping places">
                    20 number of sleeping places
                  </option>
                  <option value="21 compartment for children">
                    21 compartment for children
                  </option>
                  <option value="22 service vehicle">22 service vehicle</option>
                  <option value="23 status of vehicle (open/closed to clients)">
                    23 status of vehicle (open/closed to clients)
                  </option>
                  <option value="24 panorama vehicle">
                    24 panorama vehicle
                  </option>
                  <option value="25 vehicle with business compartments">
                    25 vehicle with business compartments
                  </option>
                  <option value="26 lounge first class">
                    26 lounge first class
                  </option>
                  <option value="27 lounge second class">
                    27 lounge second class
                  </option>
                  <option value="28 vehicle with conference compartment">
                    28 vehicle with conference compartment
                  </option>
                  <option value="29 bistro vehicle">29 bistro vehicle</option>
                </select>
              </div>
            </div>
            {/* End of Row 3 */}
            <CreateVehicleButton />
          </form>
          {/* End of Form */}
        </div>
      );
    }
  }
}

export default VehicleCreateForm;
