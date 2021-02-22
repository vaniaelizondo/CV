import React from "react";
import { BiNetworkChart } from 'react-icons/bi'
import { FaAws, FaCanadianMapleLeaf } from 'react-icons/fa'
import { FcRuler } from 'react-icons/fc'

const Courses = ({ courses }) => {
  return (
    <div id="Courses">
      <h3>Courses & Certifications</h3>
      {courses.map((course, index) => (
        <div className="block" key={index}>
          <div className="TwoColumns">
            <div className="FirstColumn">
              {index === 0 
                ? <BiNetworkChart className="icon"/>
                : (index === 1
                  ? <FaAws className="icon" color="black"/>
                  : (index === 2
                    ? <FcRuler className="icon" />
                    : <FaCanadianMapleLeaf className="icon" color="red" />
                  )
                )
              }
            </div>
            <div className="SecondColumn">
              <h4>{course.name}</h4>
              <h5>{course.place}</h5>
              <h6>{course.date}</h6>
              <a href={course.url} target="_blank" rel="noopener noreferrer">
                <h6>{course.url}</h6>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
