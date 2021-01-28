import React from "react";
import image from "../../../assets/Home-Hero-Image.jpg";
import decoration from "../../../assets/Decoration.svg";
import { Link } from "react-router-dom";
import Button from "../../elements/Button";

const HomeMainSection = ({ isLogged }) => {
  return (
    <section className="main-section">
      <img src={image} alt="" className="main-section-img" />
      <div className="main-section-content">
        <h1 className="main-section-title">Zacznij pomagać!</h1>
        <h1 className="main-section-title">
          Oddaj niechciane rzeczy w zaufane ręce
        </h1>
        <img src={decoration} alt="" className="decoration" />
        <div className="main-section-buttons">
          <Link to={isLogged ? "oddaj-rzeczy" : "/logowanie"}>
            <Button
              width="310px"
              height="120px"
              text1="ODDAJ"
              text2="RZECZY"
              size="36px"
            />
          </Link>
          <Link to={isLogged ? "oddaj-rzeczy" : "/logowanie"}>
            <Button
              width="310px"
              height="120px"
              text1="ZORGANIZUJ"
              text2="ZBIÓRKĘ"
              size="36px"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeMainSection;
