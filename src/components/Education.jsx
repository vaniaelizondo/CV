import React from "react";

const Education = ({education}) => {
  return (
    <div>
      <h3>Education</h3>
      <div className="SecondColumn">
        {education.map((value, index) => (
          <div className="block" key={index}>
            <h4>{value.degree}</h4>
            <h5>{value.campus}</h5>
            <h6>{value.date}</h6>
          </div>
        ))}
      </div>
      <div className="HorizontalLineInter">
        <hr />
      </div>
    </div>
  );
};

export default Education;
