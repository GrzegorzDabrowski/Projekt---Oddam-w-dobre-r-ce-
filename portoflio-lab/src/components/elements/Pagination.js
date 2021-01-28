import React, { useState } from "react";

const Pagination = ({ totalPosts, postPerPage, paginate }) => {
  const pageNumbers = [];
  const [activeIndex, setActiveIndex] = useState(0);

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={totalPosts <= 3 ? "pagination hide" : "pagination"}>
      {pageNumbers.map((number, index) => {
        const className =
          activeIndex === index
            ? "pagination-item active-page"
            : "pagination-item";

        return (
          <li key={number} className={className}>
            <p onClick={() => paginate(number, index, setActiveIndex)}>
              {number}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
