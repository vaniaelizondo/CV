import React from "react";

const Extras = ({ extras }) => {
  return (
    <div>
      <div className="TwoColumns">
        <h3>Extracurricular activities</h3>
        <div className="SecondColumn">
          {extras.map((extra, index) => (
            <div className="block" key={index}>
              <h4>{extra.title}</h4>
              <h5>{extra.place}</h5>
              <h6>{extra.date}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Extras;
