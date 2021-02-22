import React from "react";
import { FaGraduationCap } from 'react-icons/fa'
import { FcDiploma1 } from 'react-icons/fc'

const Education = ({ education }) => {
  return (
    <div id="Education">
      <h3>Education</h3>
        {education.map((value, index) => (
          <div className="block" key={index}>
          <div className="TwoColumns">
            <div className="FirstColumn">
              {index === 0 
                ? <FaGraduationCap className="icon"/>
                : <FcDiploma1 className="icon"/>
              }
            </div>
            <div className="SecondColumn">
              <h4>{value.degree}</h4>
              <h5>{value.campus}</h5>
              <h6>{value.date}</h6>
            </div>
          </div>
          </div>
        ))}
    </div>
  );
};

export default Education;
