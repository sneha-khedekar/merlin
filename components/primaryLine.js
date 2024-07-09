import React from "react";

const PrimaryLine = () => {
  return (
    <>
      <div className="mt-3 d-flex">
        <span
          className="d-block primaryline bg-success"
          style={{ height: "4px" }}
        ></span>
        <span
          className="d-block primaryline bg-danger"
          style={{ height: "4px" }}
        ></span>

        <span
          className="d-block primaryline bg-warning"
          style={{ height: "4px" }}
        ></span>
      </div>
    </>
  );
};

export default PrimaryLine;
