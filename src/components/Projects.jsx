import React from "react";

const Projects = ({ projects }) => {
  return (
    <div>
      <div className="TwoColumns">
        <h3>Projects</h3>
        <div className="SecondColumn">
          {projects.map((project, index) => (
            <div className="block" key={index}>
              <h4>{project.title}</h4>
              <h5>{project.language}</h5>
			  <a href={project.website} target="_blank" rel="noopener noreferrer">
				<h6>{project.website}</h6>
			  </a>
              <p>{project.description}</p>
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

export default Projects;
