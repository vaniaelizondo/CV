import React from "react";
import { SiPhp, SiPython, SiCplusplus, SiReact } from 'react-icons/si';
import { IoLogoVue } from "react-icons/io5";
import { VscCode } from "react-icons/vsc";

const LANGUAGE_ICONS = {
  PHP: SiPhp,
  PYTHON: SiPython,
  "C++": SiCplusplus,
  REACT: SiReact,
  VUE: IoLogoVue,
};

function getLanguageIcon(language) {
  const key = String(language || "").trim().toUpperCase();
  const Icon = LANGUAGE_ICONS[key] || VscCode;
  return <Icon className="icon" />;
}

export default function Card({ projects }) {
  return (
    <div id="Projects">
      <h3>Projects</h3>
        {projects.map((project, index) => (
          <div className="block" key={index}>
            <div className="TwoColumns">
              <div className="FirstColumn">
                {getLanguageIcon(project.language)}
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
}
