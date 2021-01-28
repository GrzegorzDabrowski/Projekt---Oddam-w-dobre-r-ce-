import React from "react";
import decoration from "../../../assets/Decoration.svg";
import icon1 from "../../../assets/Icon-1.svg";
import icon2 from "../../../assets/Icon-2.svg";
import icon3 from "../../../assets/Icon-3.svg";
import icon4 from "../../../assets/Icon-4.svg";
import SingleStep from "../../elements/SingleStep";
import Button from "../../elements/Button";
import { Link } from "react-router-dom";

const HomeSimpleSteps = ({ isLogged }) => {
  return (
    <section className="simple-steps" id="simple-steps">
      <h1 className="simple-steps-title">Wystarczą 4 proste kroki</h1>
      <img src={decoration} alt="" className="simple-steps-decoration" />
      <div className="simple-steps-container">
        <div className="steps">
          <SingleStep
            img={icon1}
            text1="Wybierz rzeczy"
            text2="ubrania, zabawki, sprzęt, inne"
          />
          <SingleStep
            img={icon2}
            text1="Spakuj je"
            text2="skorzystaj z worków na śmieci"
          />
          <SingleStep
            img={icon3}
            text1="Zdecyduj, komu chcesz pomóc"
            text2="wybierz zaufane miejsce"
          />
          <SingleStep
            img={icon4}
            text1="Zamów kuriera"
            text2="kurier przyjedzie w dogodnym terminie"
          />
        </div>
      </div>

      <Link
        className="simple-steps-btn"
        to={isLogged ? "oddaj-rzeczy" : "logowanie"}
      >
        <Button
          width="310px"
          height="120px"
          text1="ODDAJ"
          text2="RZECZY"
          size="34px"
        />
      </Link>
    </section>
  );
};

export default HomeSimpleSteps;
