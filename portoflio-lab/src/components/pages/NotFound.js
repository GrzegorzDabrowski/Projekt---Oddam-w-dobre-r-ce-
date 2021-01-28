import React from "react";
import decoration from "../../assets/Decoration.svg";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>
        Samuraju! Szukaj gdzie indziej, bo tu jest 404 i nic nie znajdziesz :)
      </h1>
      <img src={decoration} alt="" />
    </div>
  );
};

export default NotFound;
