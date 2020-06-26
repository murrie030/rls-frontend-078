import React from "react";

const CreateVehicleButton = () => {
  const style = {
    margin: "1rem",
    float: "right",
  };
  return (
    <button type="button" className="btn btn-success" style={style}>
      Create new vehicle
    </button>
  );
};

export default CreateVehicleButton;
