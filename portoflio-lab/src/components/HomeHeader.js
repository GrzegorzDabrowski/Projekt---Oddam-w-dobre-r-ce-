import React from "react";
import { Link as LinkTo } from "react-router-dom";
import { Link } from "react-scroll";

const HomeHeader = ({ user, isLogged, setIsLogged }) => {
  return (
    <section className="header">
      <div className="container">
        <ul className="upper-menu">
          {isLogged ? (
            <>
              <h4>Cześć, {user.user.email}</h4>
              <LinkTo to="/oddaj-rzeczy">
                <li className="give-things">Oddaj rzeczy</li>
              </LinkTo>
              <LinkTo to="/wylogowano">
                {" "}
                //dodać onClick
                <li>Wyloguj</li>
              </LinkTo>
            </>
          ) : (
            <>
              <LinkTo to="/logowanie">
                <li className="login">Zaloguj</li>
              </LinkTo>
              <LinkTo to="/rejestracja">
                <li>Załóż konto</li>
              </LinkTo>
            </>
          )}
        </ul>
        <ul className="bottom-menu">
          <LinkTo to="/">
            <li>Start</li>
          </LinkTo>
          <Link
            to="simple-steps"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li>O co chodzi?</li>
          </Link>
          <Link to="about-us" spy={true} smooth={true} duration={500}>
            <li>O nas</li>
          </Link>
          <Link to="who-we-help" spy={true} smooth={true} duration={500}>
            <li>Fundacja i organizacje</li>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <li>Kontakt</li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default HomeHeader;
