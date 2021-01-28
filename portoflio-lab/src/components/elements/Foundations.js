import React from "react";

const Foundations = ({ foundations }) => {
  return (
    <ul className="foundation-list">
      {foundations.map((item, index) => {
        return (
          <>
            <li key={index}>
              <div className="foundation-content">
                <h2 className="foundation-title">{item.title}</h2>
                <p className="foundation-description">{item.description}</p>
              </div>
              <p className="foundation-items">{item.items}</p>
            </li>
            <div className="foundation-line"></div>
          </>
        );
      })}
    </ul>
  );
};
export default Foundations;
