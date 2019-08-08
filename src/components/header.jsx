import React, { Component } from "react";
import profilepic from "../images/profilepic.png";
import email_icon from "../images/email.svg";
import phone_icon from "../images/phone.svg";
import linkedin_icon from "../images/linkedin.svg";
import { Grid } from "semantic-ui-react";

const Header = ({ name, title, email, cel, linkedin }) => {

  return (
    <div className="header-block">
      <img src={profilepic} className="image-profile" alt='Profile Picture' />
      <div className="header">{name}</div>
      <div className="subheader">{title}</div>
      <a href={`mailto:${email}`}>
        <img src={email_icon} className="icons" alt='Email Icon' />
      </a>
      <a href={`callto:${cel}`}>
        <img src={phone_icon} className="icons-middle" alt='Phone Icon' />
      </a>
      <a href={`${linkedin}`} target="_blank">
        <img src={linkedin_icon} className="icons" alt='Linkedin Icon' />
      </a>
    </div>
  )
}

export default Header;
