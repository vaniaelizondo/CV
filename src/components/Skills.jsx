import React from "react";
import { Progress } from "semantic-ui-react";
import { HiCode } from 'react-icons/hi';
import { FaRobot } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import { FcMultipleDevices } from 'react-icons/fc';

const Skills = ({ skills }) => {
  return (
    <div id="Skills">
      <h3>Skills</h3>
      {skills.map((skill, index) => (
        <div className="block" key={index}>
          <div className="TwoColumns">
            <div className="FirstColumn">
              {index === 0 
                ? <HiCode className="icon"/>
                : (index === 1
                  ? <FcMultipleDevices className="icon" />
                  : <GrLanguage className="icon" color="black" />
                )
              }
            </div>
            <div className="SecondColumn">
              <h4>{skill.title}</h4>
              <div className="skills-bars">
                {skill.tools.map((tool, item) => (
                  <div key={item}>
                    {tool.name}
                    <Progress percent={tool.level} color="blue" active />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
