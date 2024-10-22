import React from "react";
import { SiPhp, SiPython, SiCplusplus } from 'react-icons/si';

const Projects = ({ projects }) => {
  return (
    <div id="Projects">
      <h3>Projects</h3>
        {projects.map((project, index) => (
          <div className="block" key={index}>
            <div className="TwoColumns">
              <div className="FirstColumn">
                {project.language === "PHP" 
                  ? <SiPhp className="icon" />
                  : (project.language === "Python" 
                    ? <SiPython className="icon" />
                    : <SiCplusplus className="icon" />
                  )
                }
              </div>
              <div className="SecondColumn">
                <h4>{project.title}</h4>
                <h5>{project.language}</h5>
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  <h6>{project.website}</h6>
                </a>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Projects;
