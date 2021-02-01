import React from "react";
import HomeHeader from "./Home/HomeHeader";
import decoration from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";

const Register = () => {
  const validate = (values) => {
    const errors = {};

    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) &&
      values.email.length
    ) {
      errors.email = "Podany email jest nieprawidłowy!";
    }

    if (values.password.length < 6 && values.password.length) {
      errors.password = "Hasło jest za krótkie!";
    }

    if (values.password !== values.passwordRepeat) {
      errors.passwordRepeat = "Hasła nie są takie same!";
    }

    return errors;
  };

  return (
    <section className="register-page">
      <HomeHeader />
      <div className="register-page-content">
        <h1>Załóż konto</h1>
        <img src={decoration} alt="" />
        <form>
          <div className="register-form-inputs">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
            <label htmlFor="password">Hasło</label>
            <input id="password" name="password" type="password" />
            <label htmlFor="password">Powtórz hasło</label>
            <input id="password" name="password" type="password" />
          </div>
        </form>
        <div className="register-form-buttons">
          <button type="submit">Załóż konto</button>
          <Link className="login" to="/logowanie">
            <h2>Zaloguj się</h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
