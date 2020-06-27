import React, { Component } from "react";

class VehicleForm extends Component {
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
    const subtitle = {
      marginTop: "1.2rem",
    };
    return (
      <div className="container" id="content">
        {/* {this.state.data.map((vehicle) => (
          <p key={vehicle.id}>test with {vehicle.id}</p>
        ))} */}
        <div className="title">
          <h1>Vehicle Detail</h1>
          <hr />
          <p>
            Below there is an overview of the specific vehicle you've chosen.
            First the IDs, then the additional information.
          </p>
        </div>

        <div className="ids-title" style={subtitle}>
          <h4>IDs</h4>
          <hr />
        </div>

        {/* IDs form */}
        <form id="vehicle-form">
          {/* Row one */}
          <div className="form-row">
            {/* Vehicle ID */}
            <div className="form-group col-md-6">
              <label for="vehicle-id">
                <b>1)</b> Vehicle ID
              </label>
              <input
                type="number"
                className="form-control"
                id="vehicle-id"
                name="vehicle-id"
                readOnly
              ></input>
            </div>
            {/* End Vehicle ID */}

            {/* Coach or Trainset Commercial Data ID */}
            <div className="form-group col-md-6">
              <label for="coach-or-trainset-commercial-data-id">
                <b>2)</b> Coach or Trainset Commercial Data ID
              </label>
              <input
                type="number"
                className="form-control"
                id="coach-or-trainset-commercial-data-id"
                name="coach-or-trainset-commercial-data-id"
                readOnly
              ></input>
            </div>
            {/* End Coach or Trainset Commercial Data ID */}
          </div>
          {/* End Row 1 */}

          {/* Row 2 */}
          <div className="form-row">
            {/* Itinerary of Rollingstock ID */}
            <div className="form-group col-md-6">
              <label for="itinerary-of-rollingstock-id">
                <b>3)</b> Itinerary of Rollingstock ID
              </label>
              <input
                type="number"
                className="form-control"
                id="itinerary-of-rollingstock-id"
                name="itinerary-of-rollingstock-id"
                readOnly
              ></input>
            </div>
            {/* End Itinerary of Rollingstock ID */}

            {/* Restriction ID */}
            <div className="form-group col-md-6">
              <label for="restriction-id">
                <b>4)</b> Restriction ID
              </label>
              <input
                type="number"
                className="form-control"
                id="restriction-id"
                name="restriction-id"
                readOnly
              ></input>
            </div>
            {/* End Restriction ID */}
          </div>
          {/* End Row 2 */}

          {/* Row 3 */}
          <div className="form-row">
            {/* Rollingstock ID */}
            <div className="form-group col-md-6">
              <label for="rolling-stock-id">
                <b>5)</b> Rollingstock ID
              </label>
              <input
                type="number"
                className="form-control"
                id="rolling-stock-id"
                name="rolling-stock-id"
                readOnly
              ></input>
            </div>
            {/* End of Rollingstock ID */}

            {/* Owner ID */}
            <div className="form-group col-md-6">
              <label for="owner-id">
                <b>6)</b> Owner ID
              </label>
              <input
                type="number"
                className="form-control"
                id="owner-id"
                name="owner-id"
                readOnly
              ></input>
            </div>
            {/* End of Owner ID */}
          </div>
        </form>
        {/* End IDs form */}

        <div className="information-title" style={subtitle}>
          <h4>Additional Information</h4>
          <hr />
        </div>

        {/* Additional Information Form */}
        <form id="vehicle-form">
          {/* Row 4 */}
          <div className="form-row">
            {/* Traction Type */}
            <div className="form-group col-md-6">
              <label for="traction-type">
                <b>7)</b> Traction Type
              </label>
              <input
                type="number"
                className="form-control"
                id="traction-type"
                name="traction-type"
              ></input>
            </div>
            {/* End of Traction Type */}

            {/* Powered Locomotive or Trainset */}
            <div className="form-group col-md-6">
              <label for="powered-locomotive-or-trainset">
                <b>8)</b> Powered Locomotive or Trainset
              </label>
              <select className="form-control" id="form-control-select-1">
                <option>true</option>
                <option>false</option>
              </select>
            </div>
          </div>
          {/* End row 4 */}

          {/* Row 5 */}
          <div className="form-row">
            {/* Trainset Orientation */}
            <div className="form-group col-md-6">
              <label for="trainset-orientation">
                <b>9)</b> Trainset Orientation
              </label>
              <input
                type="number"
                className="form-control"
                id="trainset-orientation"
                name="trainset-orientation"
              ></input>
            </div>
            {/* End of Trainset Orientation */}

            {/* Keeper Shortname */}
            <div className="form-group col-md-6">
              <label for="keeper-short-name">
                <b>10)</b> Keeper Shortname
              </label>
              <input
                type="text"
                className="form-control"
                id="keeper-short-name"
                name="keeper-short-name"
              ></input>
            </div>
            {/* End of Keeper Shortname */}
          </div>

          {/* Row 6 */}
          {/* Internal Vehicle Facility */}
          <div className="form-group">
            <label for="internal-vehicle-facility">
              <b>11)</b> Internal Vehicle Facility
            </label>
            <input
              type="text"
              className="form-control"
              id="internal-vehicle-facility"
              name="internal-vehicle-facility"
            ></input>
          </div>
          {/* End of Internal Vehicle Facility */}
          {/* End of Row 6 */}

          {/* Row 7 */}
          <div className="form-row">
            {/* Characteristic Description Code */}
            <div className="form-group col-md-6">
              <label for="characteristic-description-code">
                <b>12)</b> Characteristic Description Code
              </label>
              <input
                type="number"
                className="form-control"
                id="characteristic-description-code"
                name="characteristic-description-code"
              ></input>
            </div>
            {/* End of Characteristic Description Code */}

            {/* Facility Type Description Code */}
            <div className="form-group col-md-6">
              <label for="facility-type-destriction-code">
                <b>13)</b> Facility Type Description Code
              </label>
              <input
                type="number"
                className="form-control"
                id="facility-type-destriction-code"
                name="facility-type-destriction-code"
              ></input>
            </div>
            {/* End of Facility Type Description Code */}
          </div>

          {/* Row 8 */}
          {/* Information to be Displayed */}
          <div className="form-group">
            <label for="information-to-be-displayed">
              <b>14)</b> Information
            </label>
            <input
              type="text"
              className="form-control"
              id="information-to-be-displayed"
              name="information-to-be-displayed"
            ></input>
          </div>
          {/* End of Information to be Displayed */}
          {/* End of Row 8 */}

          {/* Row 9 */}
          {/* Description */}
          <div className="form-group">
            <label for="description">
              <b>15)</b> Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="3"
            ></textarea>
          </div>
          {/* End of Description */}
          {/* End of Row 9 */}
        </form>
        {/* End Additional Information Form */}
      </div>
    );
  }
}

export default VehicleForm;
