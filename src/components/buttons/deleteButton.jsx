import React from "react";

const DeleteButton = () => {
  const deleteStyle = {
    margin: "5px",
  };
  return (
    <button type="button" className="btn btn-danger btn-sm" style={deleteStyle}>
      Delete
    </button>
  );
};

export default DeleteButton;
