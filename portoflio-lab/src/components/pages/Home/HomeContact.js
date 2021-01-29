import React, { useState } from "react";
import { useFormik } from "formik";
import decoration from "../../../assets/Decoration.svg";
import facebook from "../../../assets/Facebook.svg";
import instagram from "../../../assets/Instagram.svg";

const HomeContact = () => {
  const [success, setSuccess] = useState("");

  const validate = (values) => {
    const errors = {};

    if (values.name.includes(" ")) {
      errors.name = "Podane imię jest nieprawidłowe!";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Podany email jest nieprawidłowy!";
    }

    if (values.message.length < 120) {
      errors.message = "Wiadomość musi mieć co najmniej 120 znaków!";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (e) => {
      fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formik.initialValues),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setSuccess("Wiadomość została wysłana! Wkrótce się skontaktujemy");
          formik.resetForm();
        })
        .catch((error) => {
          console.log("Error", error);
        });
    },
  });

  return (
    <section className="contact">
      <div className="contact-background"></div>
      <div className="contact-content">
        <h1>Skontaktuj się z nami</h1>
        <img src={decoration} alt="" />
        {success === "" ? null : <div className="success">{success}</div>}
        <form className="form" onSubmit={formik.hendleSubmit}>
          <div className="form-container">
            <div className="form-box">
              <label htmlFor="name">Wpisz swoje imię</label>
              <input
                id="name"
                name="name"
                type="text"
                className={formik.errors.name ? "error-input" : null}
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Jon"
              />
              {formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="form-box">
              <label htmlFor="email">Wpisz swój email</label>
              <input
                id="email"
                name="email"
                type="email"
                className={formik.errors.email ? "error-input" : null}
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="jonsnow@winterfell.com"
              />
              {formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className="form-box-big">
            <label htmlFor="message">Wpisz swoją wiadomość</label>
            <textarea
              name="message"
              id="message"
              className={formik.errors.message ? "error-input" : null}
              onChange={formik.handleChange}
              value={formik.values.message}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            {formik.errors.message ? (
              <div className="error">{formik.errors.message}</div>
            ) : null}
          </div>
          <button type="submit">Wyślij</button>
        </form>
      </div>
      <footer>
        <h3>Copyright by Coders Lab</h3>
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
      </footer>
    </section>
  );
};

export default HomeContact;
