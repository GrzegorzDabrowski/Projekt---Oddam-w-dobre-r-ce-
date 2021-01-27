import React from "react";

const Button = ({ width, height, text1, text2, size }) => {
  return (
    <div className="button" style={{ width, height, fontSize: size }}>
      <div>{text1}</div>
      <div>{text2}</div>
    </div>
  );
};

export default Button;
