import React from "react";
import profilepic from "../images/profilepic.png";
import email_icon from "../images/email_white.svg";
import phone_icon from "../images/phone_white.svg";
import linkedin_icon from "../images/linkedin_white.svg";
import download_icon from "../images/download_white.svg";
import { Grid, Container } from "semantic-ui-react";

const Header = ({ name, title, email, cel, linkedin }) => {

  return (
    <div className="header-block">
      <Container>
        <Grid verticalAlign='middle' className='grid-bar' >
          <Grid.Column width={3} >
            <img src={profilepic} className="image-profile" alt='Profile' />
          </Grid.Column>
          <Grid.Column width={10} textAlign='center'>
            <ul className="title">
              <li className="title">
                <h1>{name}</h1>
              </li>
              <li className="title">
                <h2>{title}</h2>
              </li>
            </ul>
          </Grid.Column>
          <Grid.Column width={1} >
            <ul className="icons">
              <li className="icons" >
                <a href={`mailto:${email}`}>
                  <img src={email_icon} className="icons" title={email} alt='Email Icon' />
                </a>
              </li>
              <li className="icons" >
                <a href={`callto:${cel}`}>
                  <img src={phone_icon} className="icons" title={cel} alt='Phone Icon' />
                </a>
              </li>
              <li className="icons" >
                <a href={`${linkedin}`} target="_blank" rel="noopener noreferrer" >
                  <img src={linkedin_icon} className="icons" title={`${linkedin}`} alt='Linkedin Icon' />
                </a>
              </li>
              <li className="icons" >
                <img src={download_icon} className="icons" alt='Download Icon' title='Download PDF' />
              </li>
            </ul>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}

export default Header;
