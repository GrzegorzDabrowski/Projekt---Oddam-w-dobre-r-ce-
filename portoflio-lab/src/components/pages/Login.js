import React, { useState } from "react";
import HomeHeader from "./Home/HomeHeader";
import decoration from "../../assets/Decoration.svg";
import { useFormik } from "formik";
import Home from "./Home/Home";
import { Link } from "react-router-dom";

const Login = () => {
  const [errorLogin, setErrorLogin] = useState("");

  const validate = (values) => {
    const errors = {};

    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) &&
      values.email.length
    ) {
      errors.email = "Podany email jest nieprawidłowy!";
      setErrorLogin("");
    }

    if (values.password.length < 6 && values.password.length) {
      errors.password = "Hasło jest za krótkie!";
      setErrorLogin("");
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (e) => {},
  });

  return (
    <section className="login-page">
      <HomeHeader />
      <div className="login-page-content">
        <h1>Zaloguj się</h1>
        <img src={decoration} alt="" />
        <form>
          <div className="form-inputs">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
            <label htmlFor="password">Hasło</label>
            <input id="password" name="password" type="password" />
          </div>
        </form>
        <div className="form-buttons">
          <button type="submit">Zaloguj się</button>
          <Link className="register" to="/rejestracja">
            <h2>Załóż konto</h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
