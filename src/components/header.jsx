import React, { Component } from "react";
import profilepic from "../images/profilepic.png";
import email_icon from "../images/email.png";
import phone_icon from "../images/phone.png";
import linkedin_icon from "../images/linkedin.png";
import { Grid } from "semantic-ui-react";

const Header = ({ name, title, email, cel, linkedin }) => (
  <div className="header-block">
    <img src={profilepic} className="image-profile" />
    <div className="header">{name}</div>
    <div className="subheader">{title}</div>
    <a href={`mailto:${email}`}>
      <img src={email_icon} className="icons" />
    </a>
    <a href={`callto:${cel}`}>
      <img src={phone_icon} className="icons-middle" />
    </a>
    <a href={`${linkedin}`} target="_blank">
      <img src={linkedin_icon} className="icons" />
    </a>
  </div>
);

export default Header;
