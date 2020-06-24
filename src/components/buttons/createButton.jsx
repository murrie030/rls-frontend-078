import React from "react";

const CreateButton = () => {
  const style = {
    margin: "1rem",
    float: "right",
  };
  return (
    <button type="button" className="btn btn-success" style={style}>
      Create new train
    </button>
  );
};

export default CreateButton;
