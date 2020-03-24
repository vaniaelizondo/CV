import React from "react";
import { Progress } from "semantic-ui-react";

const Skills = ({skills}) => {
  return (
    <div>
      <h3>Skills</h3>
      <div className="SecondColumn">
        {skills.map((skill, index) => (
          <div className="block" key={index}>
            <h4>{skill.title}</h4>
            <div className="skills-bars">
              {skill.tools.map((tool, item) => (
                <div key={item}>
                  {tool.name}
                  <Progress percent={tool.level} color="purple" active />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
