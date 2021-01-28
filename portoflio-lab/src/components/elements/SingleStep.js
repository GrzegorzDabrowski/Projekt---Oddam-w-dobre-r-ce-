import React from "react";

const SingleStep = ({ img, text1, text2 }) => {
  return (
    <div className="single-step">
      <img src={img} alt="" />
      <h2>{text1}</h2>
      <div className="single-step-line"></div>
      <p>{text2}</p>
    </div>
  );
};

export default SingleStep;
