import React from "react";
import email_icon from "../images/email_white.svg";
import phone_icon from "../images/phone_white.svg";
import mappin_icon from "../images/mappin_white.svg";
import github_icon from "../images/github_white.svg";
import linkedin_icon from "../images/linkedin_white.svg";
import download_icon from "../images/download_white.svg";
import CV from "../data/VaniaAlejandraElizondoMartinez.pdf";

const Header = ({
  name,
  title,
  email,
  cel,
  location,
  locationURL,
  github,
  linkedin
}) => {
  return (
    <div className="header-block">
      <ul className="title">
        <li>
          <h1>{name}</h1>
        </li>
        <li>
          <h2>{title}</h2>
        </li>
        <li>
          <a href={`mailto:${email}`}>
            <img
              src={email_icon}
              className="icons"
              title={email}
              alt="Email Icon"
            />
          </a>
          <a href={`callto:${cel}`}>
            <img
              src={phone_icon}
              className="icons"
              title={cel}
              alt="Phone Icon"
            />
          </a>
          <a href={locationURL} target="_blank" rel="noopener noreferrer">
            <img
              src={mappin_icon}
              className="icons"
              title={location}
              alt="Map Icon"
            />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img
              src={github_icon}
              className="icons"
              title={`${github}`}
              alt="Github Icon"
            />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img
              src={linkedin_icon}
              className="icons"
              title={`${linkedin}`}
              alt="Linkedin Icon"
            />
          </a>
          <a href={CV} target="_blank">
            <img
              src={download_icon}
              className="icons"
              title="Download CV in PDF"
              alt="Download Icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
