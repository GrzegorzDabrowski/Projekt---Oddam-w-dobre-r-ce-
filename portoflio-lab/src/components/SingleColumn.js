import React from "react";

const SingleColumn = ({ nr, title, text }) => {
  return (
    <div className="single-column">
      <h1>{nr}</h1>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default SingleColumn;
