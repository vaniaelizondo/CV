import React from "react";
import email_icon from "../images/email_white.svg";
import phone_icon from "../images/phone_white.svg";
import mappin_icon from "../images/mappin_white.svg";
import github_icon from "../images/github_white.svg";
import linkedin_icon from "../images/linkedin_white.svg";
import download_icon from "../images/download_white.svg";
import CV from "../data/VaniaAlejandraElizondoMartinez.pdf";
import styled from 'styled-components';

const HeaderBlock = styled.div `
  background: #952092;
`;

const HeaderTitle = styled.ul`
  text-align: center;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;
  box-sizing: border-box;
  margin-bottom: 1.5rem;
`;

const HeaderIcons = styled.img`
  margin: 0.3rem 1rem 0 1rem;
  width: auto;
  height: 2rem;
`;

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
    <HeaderBlock>
      <HeaderTitle>
        <li>
          <h1>{name}</h1>
        </li>
        <li>
          <h2>{title}</h2>
        </li>
        <li>
          <a href={`mailto:${email}`}>
            <HeaderIcons
              src={email_icon}
              title={email}
              alt="Email Icon"
            />
          </a>
          <a href={`callto:${cel}`}>
            <HeaderIcons
              src={phone_icon}
              title={cel}
              alt="Phone Icon"
            />
          </a>
          <a href={locationURL} target="_blank" rel="noopener noreferrer">
            <HeaderIcons
              src={mappin_icon}
              title={location}
              alt="Map Icon"
            />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <HeaderIcons
              src={github_icon}
              title={`${github}`}
              alt="Github Icon"
            />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <HeaderIcons
              src={linkedin_icon}
              title={`${linkedin}`}
              alt="Linkedin Icon"
            />
          </a>
          <a href={CV} target="_blank" rel="noopener noreferrer">
            <HeaderIcons
              src={download_icon}
              title="Download CV in PDF"
              alt="Download Icon"
            />
          </a>
        </li>
      </HeaderTitle>
    </HeaderBlock>
  );
};

export default Header;
