import React from "react";
import SingleColumn from "./SingleColumn";

const HomeThreeColumns = () => {
  return(
    <section className="three-columns">
      <div className="three-columns-container">
        <div className="columns">
          <SingleColumn nr="10" title="ODDANYCH WORKÓW" text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." />
          <SingleColumn nr="5" title="WSPARTYCH ORGANIZACJI" text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." />
          <SingleColumn nr="7" title="ZORGANIZOWANYCH ZBIÓREK" text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." />
        </div>
      </div>
    </section>
  )
};

export default HomeThreeColumns;
