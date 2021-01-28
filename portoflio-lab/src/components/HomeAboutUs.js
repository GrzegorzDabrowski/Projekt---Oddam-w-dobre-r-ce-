import React from "react";
import people from "../assets/People.jpg";
import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";

const HomeAboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="about-us-content">
        <h1>O nas</h1>
        <img src={decoration} alt="" className="about-us-decoration" />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <div className="about-us-signature">
          <img src={signature} alt="" />
        </div>
      </div>
      <div className="about-us-img">
        <img src={people} alt="" />
      </div>
    </section>
  );
};

export default HomeAboutUs;
