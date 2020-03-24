import React from "react";
import styled from "styled-components";

const ExperienceList = styled.li`
  color: #952092;
  list-style-type: '✽  ';
`;

const ExperienceSpan = styled.span`
  color: black;
`;

const Experience = ({ experience }) => {
  return (
    <div>
      <h3>Experience</h3>
      <div className="SecondColumn">
        {experience.map((value, index) => (
          <div className="block" key={index}>
            <h4>{value.title}</h4>
            <h5>{value.company}</h5>
            <h6>{value.date}</h6>
            {value.description.map((line, item) => (
              <ExperienceList key={item}>
                <ExperienceSpan>{line.line}</ExperienceSpan>
              </ExperienceList>
            ))}
          </div>
        ))}
      </div>
      <div className="HorizontalLineInter">
        <hr />
      </div>
    </div>
  );
};

export default Experience;
