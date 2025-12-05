import React from "react";
import "../styles/Header.scss";
import { Navbar, Nav } from "react-bootstrap";
import email_icon from "../images/email_white.svg";
import phone_icon from "../images/phone_white.svg";
import mappin_icon from "../images/mappin_white.svg";
import github_icon from "../images/github_white.svg";
import linkedin_icon from "../images/linkedin_white.svg";
import download_icon from "../images/download_white.svg";
import profile from "../images/profile.jpeg";
import CV from "../data/VaniaAlejandraElizondoMartinez.pdf";

const Header = ({
  name,
  title,
  email,
  cel,
  location,
  locationURL,
  github,
  linkedin,
  bio
}) => {
  return (
    <div id="Home">
      <Navbar collapseOnSelect expand="md" fixed="top" id="navbar">
        <Navbar.Brand href="#Home">:)</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#Home">About</Nav.Link>
            <Nav.Link href="#Experience">Experience</Nav.Link>
            <Nav.Link href="#Education">Education</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Courses">Courses</Nav.Link>
            <Nav.Link href="#Extras">Extras</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="header-title">
        <img
          className="profile"
          src={profile}
          title="Me :)"
          alt="Profile"
        />
        <h1>{name}</h1>
        <h2>{title}</h2>
        <div className="header-icons">
          <a href={`mailto:${email}`}>
            <img
              src={email_icon}
              title={email}
              alt="Email Icon"
            />
          </a>
          <a href={`callto:${cel}`}>
            <img
              src={phone_icon}
              title={cel}
              alt="Phone Icon"
            />
          </a>
          <a href={locationURL} target="_blank" rel="noopener noreferrer">
            <img
              src={mappin_icon}
              title={location}
              alt="Map Icon"
            />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img
              src={github_icon}
              title={github}
              alt="Github Icon"
            />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img
              src={linkedin_icon}
              title={linkedin}
              alt="Linkedin Icon"
            />
          </a>
          <a href={CV} target="_blank" rel="noopener noreferrer">
            <img
              src={download_icon}
              title="Download CV in PDF"
              alt="Download Icon"
            />
          </a>
        </div>
      </div>
      <div className="header-about">{bio}</div>
    </div>
  );
};

export default Header;
