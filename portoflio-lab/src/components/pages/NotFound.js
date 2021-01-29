import React from "react";
import decoration from "../../assets/Decoration.svg";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404. The night is dark and full of errors</h1>
      <img src={decoration} alt="" />
    </div>
  );
};

export default NotFound;
