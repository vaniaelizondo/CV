import React from "react";
import styled from "styled-components";

const FooterBlock = styled.div`
  background: darkgray;
  clear: both;
  padding: 1rem 0;
  text-align: center;
`;

const FooterDiv =styled.div`
	color: white;
`;

const Footer = ({name, email, cel, location}) => {
  return (
    <FooterBlock>
      <FooterDiv>{email} &nbsp; | &nbsp; {cel} &nbsp; | &nbsp; {location}</FooterDiv>
      <FooterDiv>© 2020 &nbsp;{name}. &nbsp;All rights reserved.</FooterDiv>
    </FooterBlock>
  );
};

export default Footer;
