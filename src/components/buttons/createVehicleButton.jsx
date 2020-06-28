import React from "react";

const CreateVehicleButton = () => {
  const style = {
    margin: "1rem",
    float: "right",
    width: "60px",
    borderRadius: "54px",
    fontSize: "30px",
  };

  return (
    <button
      type="button"
      className="btn btn-success"
      id="createButton"
      title="Create new vehicle"
      style={style}
    >
      +
    </button>
  );
};

export default CreateVehicleButton;
