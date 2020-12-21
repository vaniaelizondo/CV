import React from "react";

const Courses = ({ courses }) => {
  return (
    <div>
      <div className="TwoColumns">
        <h3>Courses & Certifications</h3>
        <div className="SecondColumn">
          {courses.map((course, index) => (
            <div className="block" key={index}>
              <h4>{course.name}</h4>
              <h5>{course.place}</h5>
              <h6>{course.date}</h6>
              <a href={course.url} target="_blank" rel="noopener noreferrer">
                <h6>{course.url}</h6>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="HorizontalLine">
        <hr />
      </div>
    </div>
  );
};

export default Courses;
