import React from "react";

const Experience = ({ experience }) => {
  return (
    <div id="Experience">
      <h3>Experience</h3>
      {experience.map((value, index) => (
        <div className="block" key={index}>
          <div className="TwoColumns">
            <div className="FirstColumn">
              <img
                className="logo"
                src={value.logo}
                title={value.company}
                alt={value.company}
              />
            </div>
            <div className="SecondColumn">
              <h4>{value.title}</h4>
              <h5>{value.company}</h5>
              <h6>{value.date}</h6>
              <div className="description">
                {value.description.map((line, item) => (
                  <div key={item} className="list">{line.line}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="MobileColumn">
            {value.description.map((line, item) => (
              <div key={item} className="list">{line.line}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
