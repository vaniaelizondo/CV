import React from "react";
import profilepic from "../images/profilepic.png";
import email_icon from "../images/email_white.svg";
import phone_icon from "../images/phone_white.svg";
import linkedin_icon from "../images/linkedin_white.svg";
import { Grid, Container } from "semantic-ui-react";

const Header = ({ name, title, email, cel, linkedin }) => {

  return (
    <div className="header-block">
        <Grid className='grid-bar' verticalAlign='middle' >
          <Grid.Column width={3} >
            <img src={profilepic} className="image-profile" alt='Profile' />
          </Grid.Column>
          <Grid.Column width={12} >
            <h1>{name}</h1>
            <h2>{title}</h2>
          </Grid.Column>
          <Grid.Column width={1} floated='right' >
            <a href={`mailto:${email}`}>
              <img src={email_icon} className="icons" alt='Email Icon' />
            </a>
            <a href={`callto:${cel}`}>
              <img src={phone_icon} className="icons-middle" alt='Phone Icon' />
            </a>
            <a href={`${linkedin}`} target="_blank" rel="noopener noreferrer" >
              <img src={linkedin_icon} className="icons" alt='Linkedin Icon' />
            </a>
          </Grid.Column>
        </Grid>
    </div>
  )
}

export default Header;
